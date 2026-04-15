import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

export default function FetchDemo() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. データの取得を開始
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); // 読み込み完了
      });

    // 空の配列 [] なので、ページを表示した最初の1回だけ動く
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div>
      <h3>ユーザー一覧</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
