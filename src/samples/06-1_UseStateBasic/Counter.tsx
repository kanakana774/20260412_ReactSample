import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "1px solid #ff0000",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  countText: { fontSize: "2rem", fontWeight: "bold", margin: "10px 0" },
  button: { padding: "8px 16px", cursor: "pointer", marginRight: "5px" },
};

export const Counter = () => {
  // const [現在の値, 更新するための関数] = useState(初期値);
  // ※1 変数名, set変数名の命名規則
  // ※1 配列の分割代入
  // ※1 必ずコンポーネントのトップレベルで宣言
  const [count, setCount] = useState(0);

  // 再レンダリング確認用
  console.log("%cCounter：" + count, "color:crimson;");

  return (
    <div style={styles.container}>
      <h3>1. 数値の管理 (Counter)</h3>
      <p style={styles.countText}>{count}</p>
      {/* ※2 countの更新用関数で更新するとCounter関数コンポーネントが再レンダー（再計算）される */}
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        ＋
      </button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>
        ー
      </button>
      <button style={styles.button} onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
};
