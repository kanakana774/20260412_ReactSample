import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const SearchUserSample = () => {
  const [userId, setUserId] = useState<string>(""); // 入力中のID
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // IDが空なら何もしない
    if (!userId) {
      setUser(null);
      return;
    }

    const controller = new AbortController();

    const fetchUser = async () => {
      setLoading(true);
      try {
        // 擬似的な遅延（デバウンスの効果を分かりやすくするため）
        await new Promise((resolve) => setTimeout(resolve, 500));

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) throw new Error("ユーザーが見つかりません");

        const data = await response.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setUser(null);
          console.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // クリーンアップ：
    // 次の文字が入力された瞬間に、「前のリクエスト」をキャンセルする
    return () => {
      controller.abort();
    };
  }, [userId]); // userId が変わるたびにこの Effect が走り直す

  return (
    <div style={{ padding: "20px" }}>
      <h3>ユーザー検索 (ID入力)</h3>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="ユーザーIDを入力 (1〜10)"
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        {loading && <p>読み込み中...</p>}

        {!loading && user && (
          <div>
            <p>
              <strong>名前:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}

        {!loading && !user && userId && <p>該当するユーザーはいません</p>}
      </div>
    </div>
  );
};

export default SearchUserSample;
