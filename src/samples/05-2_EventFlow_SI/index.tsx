import { BubblingDemo } from "./BubblingDemo";
import { PreventDefaultDemo } from "./PreventDefaultDemo";

export default function EventFlow() {
  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>イベントの伝播と抑制</h2>

      <section>
        <h3>1. バブリング (Event Bubbling)</h3>
        <p>
          要素が重なっている時、イベントは内側から外側へ「泡のように」伝わっていきます。
        </p>
        <BubblingDemo />
      </section>

      <section style={{ marginTop: "40px" }}>
        <h3>2. デフォルト動作のキャンセル</h3>
        <p>ブラウザが元々持っている挙動を上書きします。</p>
        <PreventDefaultDemo />
      </section>
    </div>
  );
}
