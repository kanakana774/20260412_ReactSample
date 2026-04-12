import React from "react";
import { SortableList } from "./SortableList";

export default function ListKeyIssue() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>map における key の重要性</h2>
      <p>
        各アイテムに入力（State）を持たせた状態で、「反転」ボタンを押してみてください。
      </p>

      <div
        style={{
          backgroundColor: "#fff9db",
          padding: "15px",
          marginBottom: "20px",
          borderLeft: "5px solid #fcc419",
        }}
      >
        <strong>動作確認:</strong>
        <br />
        1. 「🍎 りんご」の横の入力欄に「赤い」と入力する。
        <br />
        2. 「反転」ボタンを押す。
        <br />
        3. 左側のリストでは、
        <strong>「🍇 ぶどう」の横に「赤い」が残ってしまう</strong>（バグ）。
        <br />
        4. 右側のリストでは、ちゃんと「🍎 りんご」と一緒に「赤い」が移動する。
      </div>

      <SortableList />

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f8f9fa",
          padding: "15px",
        }}
      >
        <h4>なぜ Index を key にしてはいけないのか？</h4>
        <ul>
          <li>
            <strong>Reactの判断基準：</strong> Reactは <code>key</code>{" "}
            を見て「どのStateがどのアイテムのものか」を判別します。
          </li>
          <li>
            <strong>Indexだと何が起きる？：</strong>{" "}
            配列を反転させても、1番目の要素の <code>key</code> は常に{" "}
            <code>0</code> です。Reactは「1番目の <code>key=0</code>{" "}
            は変わっていないな」と勘違いし、古い <code>key=0</code>{" "}
            が持っていたState（メモ内容など）をそのまま再利用してしまいます。
          </li>
          <li>
            <strong>IDならどうなる？：</strong> <code>key=1</code>{" "}
            （りんご）が下に移動しても、Reactは「IDが1のコンポーネントが移動しただけだ」と理解し、State（メモ）も一緒に移動させてくれます。
          </li>
        </ul>
      </div>
    </div>
  );
}
