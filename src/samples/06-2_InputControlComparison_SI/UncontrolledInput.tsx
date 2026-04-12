import React, { useRef, useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "2px solid #e74c3c",
    borderRadius: "8px",
  },
  input: { padding: "8px", width: "100%", marginBottom: "10px" },
  error: { fontSize: "0.85rem", color: "#c0392b" },
};

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");

  const handleCheck = () => {
    // 💡 ボタンを押さない限り、中身が何かわからない
    const val = inputRef.current?.value || "";
    setMsg(`取得した値: ${val}`);
  };

  const handleResetAttempt = () => {
    // 💡 Stateがないので、DOMを直接操作しないとリセットできない（React流ではない）
    // しかも、これを忘れると「データだけ消えて画面に残る」といったバグの元になる
    alert("Stateがないので、inputの中身を消すには直接DOMを触る必要があります");
  };

  // 再レンダリング確認用
  console.log("%c非制御：", "color:crimson;");

  return (
    <div style={styles.container}>
      <h4>非制御コンポーネントを体験してみる</h4>
      <input
        style={styles.input}
        ref={inputRef}
        placeholder="入力しても画面は反応しません"
      />
      <div style={styles.error}>
        <p>文字数: リアルタイムにカウントできません</p>
        <p>{msg}</p>
        <button onClick={handleCheck}>今現在の値を取得する</button>
        <button onClick={handleResetAttempt} style={{ marginLeft: "10px" }}>
          リセットを試みる
        </button>
      </div>
      <p style={{ fontSize: "0.7rem", marginTop: "10px" }}>
        ※文字数カウントやバリデーションを行うには、結局Stateが必要になります。
      </p>
    </div>
  );
};
