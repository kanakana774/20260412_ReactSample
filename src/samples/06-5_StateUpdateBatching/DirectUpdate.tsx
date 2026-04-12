import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "2px solid #e74c3c",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  btn: {
    padding: "8px 16px",
    cursor: "pointer",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export const DirectUpdate = () => {
  const [count, setCount] = useState(0);

  const handleTripleAdd = () => {
    // ※1 count はこの関数が呼ばれた瞬間の値（例: 0）に固定されています
    setCount(count + 1); // 0 + 1 を要求
    setCount(count + 1); // 0 + 1 を要求
    setCount(count + 1); // 0 + 1 を要求
    // ※1 結局、Reactは「あ、最後のリクエストは 0+1 だな」と判断して 1 になります

    // ※1 まぁこれでもいけますが、、、
    // let newCount = count;
    // newCount++;
    // newCount++;
    // newCount++;
    // setCount(newCount);
  };

  return (
    <div style={styles.container}>
      <h4>直接更新 (Batchingにより1しか増えない)</h4>
      <p>
        現在のカウント: <strong>{count}</strong>
      </p>
      <button style={styles.btn} onClick={handleTripleAdd}>
        一気に +3 したい（けど+1される）
      </button>
    </div>
  );
};
