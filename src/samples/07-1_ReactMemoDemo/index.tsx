import { useState } from "react";
import { HeavyComponent, MemoizedHeavyComponent } from "./HeavyComponent";
import { NameEditor } from "./NameEditor";

export default function ReactMemoDemo() {
  const [name, setName] = useState("ゲスト");

  console.log("%c--- Parent Render ---", "color: #2ecc71; font-weight: bold;");

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>React.memo の比較</h2>

      {/* 1. 名前入力（HeavyコンポーネントのPropsに関係するState） */}
      <div style={{ marginBottom: "20px" }}>
        <NameEditor name={name} onNameChange={setName} />
      </div>

      <hr />

      <section>
        <h4>1. 通常のコンポーネント</h4>
        <HeavyComponent title="Heavy (Normal)" />
      </section>

      <section style={{ marginTop: "20px" }}>
        <h4>2. メモ化されたコンポーネント</h4>
        <MemoizedHeavyComponent title="Heavy (Memoized)" />
      </section>
    </div>
  );
}
