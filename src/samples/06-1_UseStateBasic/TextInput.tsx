import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "1px solid #0000ff",
    borderRadius: "8px",
  },
  input: {
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "10px",
  },
  preview: { color: "#007bff", fontWeight: "bold" },
};

export const TextInput = () => {
  const [text, setText] = useState("");

  // 再レンダリング確認用
  console.log("%cToggle：" + text, "color:deepskyblue;");

  return (
    <div style={styles.container}>
      <h3>3. 文字列の管理 (Input)</h3>
      <input
        style={styles.input}
        type="text"
        value={text} // ※5 Stateをinputの値に必ず紐付ける。（イメージ：react→画面）
        onChange={(e) => setText(e.target.value)} // 入力されたらStateを更新（イメージ：画面→react）
        placeholder="ここに入力..."
      />
      <p>
        入力中の内容: <span style={styles.preview}>{text}</span>
      </p>
    </div>
  );
};
