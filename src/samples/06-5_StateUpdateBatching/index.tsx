import { DirectUpdate } from "./DirectUpdate";
import { FunctionalUpdate } from "./FunctionalUpdate";

export default function StateUpdateBatching() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>State更新のキューとprev</h2>
      <p>
        ReactのState更新は即座に行われるのではなく、イベント終了後にまとめて処理されます。
      </p>

      <DirectUpdate />
      <FunctionalUpdate />

      <div
        style={{
          backgroundColor: "#eee",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        <h4>まとめ</h4>
        <ul>
          <li>
            <strong>非同期性：</strong> <code>setCount</code> を呼んだ直後の行で{" "}
            <code>count</code> を見ても、まだ値は変わっていません。
          </li>
          <li>
            <strong>更新キュー：</strong> <code>prev =&gt; ...</code>{" "}
            の形式を使うと、Reactは「最新の値を待ってから次の処理をする」という予約リスト（キュー）を作ってくれます。
          </li>
          <li>
            <strong>使いどころ：</strong>{" "}
            「前のStateに基づいて次のStateを決めたい」ときは、常に{" "}
            <code>prev</code> 形式を使うのが安全です。
          </li>
        </ul>
      </div>
    </div>
  );
}
