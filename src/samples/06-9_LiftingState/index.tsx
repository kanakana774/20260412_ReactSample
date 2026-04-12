import React, { useState } from "react";
import { NamePreview } from "./NamePreview";
import { NameEditor } from "./NameEditor";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "30px",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: "sans-serif",
    border: "solid 3px #7fff00",
  },
  logBox: {
    marginTop: "30px",
    padding: "30px",
    backgroundColor: "#f0f0f0",
    fontSize: "1rem",
  },
};

export default function LiftingStateSimple() {
  // 1. 親が「名前」のStateを唯一管理する
  const [name, setName] = useState("ゲスト");

  console.log(
    "%c[Render] Parent (親コンポーネント)",
    "color: chartreuse; font-weight: bold;",
  );

  return (
    <div style={styles.container}>
      <h2>プロフィールの同期</h2>
      <p>入力側と表示側で同じ名前を共有しています。</p>

      {/* 2. 入力コンポーネントにStateと更新関数を渡す */}
      <NameEditor name={name} onNameChange={setName} />

      {/* 3. 表示コンポーネントにStateだけを渡す */}
      <NamePreview name={name} />

      <div style={styles.logBox}>
        <h4>ポイント</h4>
        <ul>
          <li>親のState（name）が更新されると、親が再描画されます。</li>
          <li>
            その結果、<strong>関係のないプレビュー側も一緒に再描画</strong>{" "}
            されます。
          </li>
          <li>ブラウザのコンソール（F12）を開いてログを見てください。</li>
        </ul>
      </div>
    </div>
  );
}
