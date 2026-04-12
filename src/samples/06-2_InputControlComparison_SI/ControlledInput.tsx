import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "2px solid #2ecc71",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  input: { padding: "8px", width: "100%", marginBottom: "10px" },
  info: { fontSize: "0.85rem", color: "#27ae60" },
};

export const ControlledInput = () => {
  const [text, setText] = useState("");

  const handleClear = () => setText(""); // 💡 Stateを書き換えるだけで入力欄が空になる

  // 再レンダリング確認用
  console.log("%c制御：" + text, "color:chartreuse;");

  return (
    <div style={styles.container}>
      <h4>制御コンポーネント</h4>
      <input
        style={styles.input}
        value={text} // ※ ここをコメントアウトしてみる
        onChange={(e) => setText(e.target.value)}
        placeholder="リアルタイムに反応します"
      />
      <div style={styles.info}>
        <p>文字数: {text.length}</p>
        <p>大文字変換: {text.toUpperCase()}</p>
        <button onClick={handleClear}>プログラムから値を空にする</button>
      </div>
    </div>
  );
};
