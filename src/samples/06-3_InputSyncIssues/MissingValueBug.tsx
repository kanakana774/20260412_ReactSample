import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "2px solid #f39c12",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  input: { padding: "8px", width: "100%", marginBottom: "10px" },
  stateBox: {
    backgroundColor: "#fdf2e9",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "0.9rem",
  },
};

export const MissingValueBug = () => {
  const [text, setText] = useState("");

  const handleReset = () => {
    setText(""); // ※1 Stateは空にするが...
  };

  // 再レンダリング確認用
  console.log("%cMissingValueBug：" + text, "color:darkorange;");

  return (
    <div style={styles.container}>
      <h4>⚠️ value属性を渡し忘れたケース</h4>
      <input
        style={styles.input}
        // ※1 value={text} が無い！
        onChange={(e) => setText(e.target.value)}
        placeholder="入力はできますが、リセットボタンが効きません"
      />
      <div style={styles.stateBox}>
        <p>
          Stateの中身: "<strong>{text}</strong>"
        </p>
        <button onClick={handleReset}>Stateをリセット</button>
      </div>
      <p style={{ fontSize: "0.8rem", color: "#e67e22", marginTop: "10px" }}>
        ※「Stateをリセット」を押しても、入力欄の文字が消えないことを確認してください。
      </p>
    </div>
  );
};
