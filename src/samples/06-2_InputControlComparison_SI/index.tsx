import React from "react";
import { ControlledInput } from "./ControlledInput";
import { UncontrolledInput } from "./UncontrolledInput";

export default function InputControlComparison() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>制御 vs 非制御コンポーネント</h2>
      <p>
        inputの <code>value</code> をStateで管理しないとどうなるか？
      </p>

      <ControlledInput />
      <UncontrolledInput />

      <div
        style={{ backgroundColor: "#eee", padding: "15px", marginTop: "20px" }}
      >
        <h4>非制御で起こる不都合まとめ：</h4>
        <ul>
          <li>
            <strong>リアルタイムのフィードバック不可:</strong>{" "}
            文字数カウントやエラー表示が入力の瞬間にできない。
          </li>
          <li>
            <strong>同期の難しさ:</strong>{" "}
            「他のボタンを押したら入力を書き換える」といった操作が面倒（DOMを直接触る必要がある）。
          </li>
          <li>
            <strong>信頼できる唯一の情報源の欠如:</strong>{" "}
            ReactのStateと画面の表示がズレる原因になる。
          </li>
        </ul>
      </div>
    </div>
  );
}
