import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "2px solid #2ecc71",
    borderRadius: "8px",
  },
  btn: {
    padding: "8px 16px",
    cursor: "pointer",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export const FunctionalUpdate = () => {
  const [count, setCount] = useState(0);

  const handleTripleAdd = () => {
    // ※2 prev には「その時点での最新のState」が順番に渡されます
    setCount((prev) => prev + 1); // キューに追加: 0 => 1
    setCount((prev) => prev + 1); // キューに追加: 1 => 2
    setCount((prev) => prev + 1); // キューに追加: 2 => 3
    // ※2 Reactが順番に実行してくれるため、正しく 3 増えます
  };

  return (
    <div style={styles.container}>
      <h4>関数型アップデート (prev を使用)</h4>
      <p>
        現在のカウント: <strong>{count}</strong>
      </p>
      <button style={styles.btn} onClick={handleTripleAdd}>
        一気に +3 される
      </button>
    </div>
  );
};
