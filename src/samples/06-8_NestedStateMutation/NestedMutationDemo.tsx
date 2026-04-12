import React, { useState } from "react";

// --- 型定義 ---
interface UserState {
  name: string;
  profile: {
    hobby: string;
    city: string;
  };
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: "20px", border: "1px solid #ddd", borderRadius: "8px" },
  flex: { display: "flex", gap: "20px" },
  box: {
    flex: 1,
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    marginBottom: "10px",
    display: "block",
  },
};

export const NestedMutationDemo = () => {
  // 初期データ
  const [user, setUser] = useState<UserState>({
    name: "田中",
    profile: { hobby: "読書", city: "東京" },
  });

  // 比較のために「過去のデータ」を保存しておく配列
  const [history, setHistory] = useState<UserState[]>([]);

  // 履歴を保存する関数
  const saveHistory = () => {
    setHistory([...history, user]);
  };

  // 悪い例：1階層目だけコピー（浅いコピー）
  const updateShallow = () => {
    saveHistory(); // 現在の値を履歴に入れる

    const newUser = { ...user }; // 1階層目は新しいオブジェクト
    newUser.profile.hobby = "サッカー"; // ※1 ここが罠！profileは参照のままなので、元のデータも書き換わる

    setUser(newUser);
  };

  // 良い例：ネストした階層もコピー（深いコピー）
  const updateDeep = () => {
    saveHistory(); // 現在の値を履歴に入れる

    setUser({
      ...user,
      profile: {
        ...user.profile, // ※1 ネストしたオブジェクトも新しいオブジェクトとして作り直す
        hobby: "野球",
      },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.flex}>
        <div style={styles.box}>
          <h4>現在のデータ</h4>
          <p>名前: {user.name}</p>
          <p>
            趣味: <strong>{user.profile.hobby}</strong>
          </p>

          <button
            style={{ ...styles.button, backgroundColor: "#ffcccc" }}
            onClick={updateShallow}
          >
            浅いコピーで「サッカー」に変更
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#ccffcc" }}
            onClick={updateDeep}
          >
            正しいコピーで「野球」に変更
          </button>
          <button onClick={() => setHistory([])}>履歴をクリア</button>
        </div>

        <div style={{ ...styles.box, backgroundColor: "#f9f9f9" }}>
          <h4>保存された履歴 (過去のデータ)</h4>
          {history.length === 0 && <p>履歴はありません</p>}
          <ul>
            {history.map((h, i) => (
              <li key={i}>
                履歴 #{i + 1}: {h.profile.hobby}
                {h.profile.hobby === user.profile.hobby && (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {" "}
                    ← 書き換わってしまった！
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
