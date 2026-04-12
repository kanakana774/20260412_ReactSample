import React, { useState, useCallback } from "react";
import { DisplayCard } from "./DisplayCard";

export default function UseCallbackInputDemo() {
  const [text, setText] = useState("");

  console.log(
    "%c--- Parent Render (入力中...) ---",
    "color: #2ecc71; font-weight: bold;",
  );

  // ❌ 悪い例：普通の関数
  // 親が再描画されるたびに「新しい関数」として作り直される
  const handleNormal = () => {
    console.log("Normal action");
  };

  // ✅ 良い例：useCallback
  // 親が再描画されても「同じ関数」として保持される
  const handleMemo = useCallback(() => {
    console.log("Memo action");
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>useCallback の実験</h2>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <label>
          テキスト入力（親のState更新）:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
          />
        </label>
        <p>入力内容: {text}</p>
      </div>

      <hr />

      <section>
        <h4>1. メモ化されていない関数を渡す</h4>
        <DisplayCard title="Card (Normal Function)" onAction={handleNormal} />
        <p style={{ fontSize: "0.8rem", color: "#e74c3c" }}>
          文字を入力するたびに、このカードも再描画されます。
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h4>2. useCallbackした関数を渡す</h4>
        <DisplayCard
          title="Card (useCallback Function)"
          onAction={handleMemo}
        />
        <p style={{ fontSize: "0.8rem", color: "#27ae60" }}>
          文字を入力しても、このカードは再描画されません！
        </p>
      </section>

      <div
        style={{ marginTop: "30px", padding: "15px", backgroundColor: "#eee" }}
      >
        <h4>💡 なぜこうなるのか？</h4>
        <p>
          入力欄に文字を打つたびに、親の <code>text</code>{" "}
          Stateが更新され、親が再描画されます。
          <br />
          その際、<code>handleNormal</code> は
          <strong>毎回新しく定義される</strong>
          ため、React.memoは「Props（関数）が変わった！」と判断して子を再描画します。
        </p>
      </div>
    </div>
  );
}
