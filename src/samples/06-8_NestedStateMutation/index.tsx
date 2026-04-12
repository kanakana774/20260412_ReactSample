import { NestedMutationDemo } from "./NestedMutationDemo";

export default function NestedStateMutation() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>ネストしたStateの更新と参照の罠</h2>
      <p>
        オブジェクトの中にオブジェクトがある場合、スプレッド構文{" "}
        <code>...</code> は一階層しか守ってくれません。
      </p>

      <div
        style={{
          backgroundColor: "#fff9db",
          padding: "15px",
          marginBottom: "20px",
          borderLeft: "5px solid #fcc419",
        }}
      >
        <strong>試し方:</strong>
        <br />
        1. 「浅いコピーでサッカーに変更」を押す。
        <br />
        2.
        右側の履歴を見てください。保存したはずの過去のデータまで「サッカー」に変わっています。
        <br />
        3. これは、新旧のStateが{" "}
        <strong>profileオブジェクトを共有してしまっている</strong> ためです。
      </div>

      <NestedMutationDemo />

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f8f9fa",
          padding: "15px",
        }}
      >
        <h4>なぜ「浅いコピー」ではダメなのか？</h4>
        <ul>
          <li>
            <strong>参照のコピー：</strong>{" "}
            <code>const newUser = {"{...user}"}</code> としたとき、{" "}
            <code>name</code> （文字列）は値がコピーされますが、{" "}
            <code>profile</code>{" "}
            （オブジェクト）は「メモリ上の住所」だけがコピーされます。
          </li>
          <li>
            <strong>共通の住所：</strong> そのため、{" "}
            <code>newUser.profile.hobby = "..."</code>{" "}
            とすると、同じ住所を見ている「過去の履歴データ」も同時に書き換わってしまいます。
          </li>
          <li>
            <strong>解決策：</strong> すべての階層で <code>{`{...}`}</code>{" "}
            を行い、新しい住所（オブジェクト）を作る必要があります。
          </li>
        </ul>
      </div>
      <section style={{ marginTop: "100px" }}>
        <iframe
          src="https://ja.react.dev/learn/updating-objects-in-state#why-is-mutating-state-not-recommended-in-react"
          title={"react公式"}
          style={{ width: "100%", minHeight: "1000px" }}
        />
      </section>
    </div>
  );
}
