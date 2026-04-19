import { useState, useEffect } from "react";

// 型定義
interface User {
  id: number;
  name: string;
  email: string;
}

const ApiFetchSample = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1. APIを呼ぶための非同期関数を定義
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // テスト用API (JSONPlaceholder)
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "予期せぬエラー");
      } finally {
        setLoading(false);
      }
    };

    // 2. 実行
    fetchUsers();

    // 注: 本来はここでクリーンアップ（AbortControllerなど）を行うのが理想的ですが、
    // まずは基本形としてシンプルにしています。
  }, []); // 空配列なので初回マウント時のみ実行

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>ユーザー一覧</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetchSample;
