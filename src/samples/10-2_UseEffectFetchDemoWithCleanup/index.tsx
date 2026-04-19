import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const ApiFetchWithCleanup = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. コントローラーを作成
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal, // 2. fetchにsignalを渡す
          },
        );

        if (!response.ok) throw new Error("Fetch failed");

        const data = await response.json();
        setUsers(data);
        console.log("データを取得しました");
      } catch (err: unknown) {
        // 3. 中断された場合はエラーとして扱わないように分岐
        if (err instanceof Error && err.name === "AbortError") {
          console.log("⏸️ 通信がキャンセルされました (Cleanup)");
        } else {
          console.error("通常のエラー:");
        }
      } finally {
        // signalが中止されていない場合のみ、ローディングを解除する
        // (アンマウント後にStateを更新しようとする警告を防ぐため)
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    // 4. クリーンアップ関数を返す
    return () => {
      console.log("クリーンアップ実行");
      controller.abort(); // 通信を中断！
    };
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default ApiFetchWithCleanup;
