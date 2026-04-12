import React from "react";
import { ObjectUpdate } from "./ObjectUpdate";
import { ArrayUpdate } from "./ArrayUpdate";

export default function StateImmutability() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Stateの不変性（Immutability）</h2>
      <p>Reactは「参照」が変わった時だけ再描画します。</p>

      <div
        style={{
          backgroundColor: "#fff9db",
          padding: "10px",
          marginBottom: "20px",
          borderLeft: "5px solid #fcc419",
        }}
      >
        <strong>「失敗」ボタンを押した後、コンソールを見ると、、、</strong>
        <br />
        データは変わっていますが、画面が更新されないことが確認できます。
      </div>

      <ObjectUpdate />
      <ArrayUpdate />

      <div style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
        <h4>なぜこうなっているのか？</h4>
        <p>
          Reactはパフォーマンスを稼ぐために、オブジェクトの中身を一つ一つチェック（深い比較）をせず、
          単に「メモリ上の住所（参照）が変わったか？」という一瞬のチェック（浅い比較）だけで済ませるルールになっています。
        </p>
      </div>
    </div>
  );
}
