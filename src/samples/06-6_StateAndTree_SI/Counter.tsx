import { useEffect, useState } from "react";

export const Counter = ({ person }: { person: string }) => {
  const [score, setScore] = useState(0);

  // 初期化確認用
  useEffect(() => {
    console.log("%cCounter初期化：" + score, "color:red;");
  }, []);

  console.log(`%c${person}のCounter更新：` + score, "color:green;");

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "150px",
      }}
    >
      <h5>{person}のスコア</h5>
      <p style={{ fontSize: "1.5rem" }}>{score}</p>
      <button onClick={() => setScore(score + 1)}>加点</button>
    </div>
  );
};
