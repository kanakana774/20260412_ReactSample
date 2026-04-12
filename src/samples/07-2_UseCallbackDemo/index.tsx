import React, { useState, useCallback } from "react";
import { MemoButton } from "./MemoButton";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("%c--- Parent Render ---", "color: #2ecc71; font-weight: bold;");

  // 手法1：普通の関数
  // 親が再描画されるたびに、新しい関数オブジェクトとして作り直される
  const handleClickNormal = () => {
    setCount((prev) => prev + 1);
  };

  // 手法2：useCallback でメモ化された関数
  // 親が再描画されても、依存配列([])が変わらない限り、同じ関数オブジェクトを使い回す
  const handleClickMemoized = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // 依存配列が空なので、最初の一回しか作られない

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>useCallback の比較</h2>
      <p>
        現在のカウント: <strong>{count}</strong>
      </p>

      {/* 無関係なStateを更新するボタン */}
      <button onClick={() => setToggle(!toggle)}>
        親の無関係なState(toggle)を更新: {String(toggle)}
      </button>

      <hr />

      <section>
        <h4>1. 通常の関数を渡す</h4>
        <MemoButton onClick={handleClickNormal} label="Normal Button" />
        <p style={{ fontSize: "0.8rem" }}>
          toggleを変えるだけで再描画されてしまいます（関数が作り直されるため）。
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h4>2. useCallbackした関数を渡す</h4>
        <MemoButton onClick={handleClickMemoized} label="Memoized Button" />
        <p style={{ fontSize: "0.8rem" }}>
          toggleを変えても再描画されません（関数が同じままだと判定されるため）。
        </p>
      </section>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h4>💡 なぜこれが必要なの？</h4>
        <ul>
          <li>
            JavaScriptでは、<code>const f = () =&gt; {}</code>{" "}
            は実行されるたびに<strong>「新しい別物」</strong>として作られます。
          </li>
          <li>
            そのため、<code>React.memo</code>{" "}
            を使っていても、Props（関数）が「新しい別物」になったと判定され、再描画が起きてしまいます。
          </li>
          <li>
            <code>useCallback</code> を使うと、関数をメモリに保存して
            <strong>「前回と同じもの」</strong>として渡せるようになります。
          </li>
        </ul>
      </div>
    </div>
  );
}
