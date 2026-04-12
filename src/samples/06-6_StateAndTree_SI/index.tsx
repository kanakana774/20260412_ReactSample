import { PreservationDemo } from "./PreservationDemo";
import { KeyResetDemo } from "./KeyResetDemo";

export default function StateAndTree() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>レンダーツリーとStateの関係</h2>
      <p>Reactはコンポーネントの「ツリー上の位置」でStateを管理しています。</p>

      <PreservationDemo />
      <KeyResetDemo />

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
            <strong>位置が同じならStateは残る:</strong>{" "}
            <code>{"{isA ? <Counter /> : <Counter />}"}</code>{" "}
            のように、同じスロットに同じ種類のコンポーネントを置くと、中身のState（スコアなど）は引き継がれます。
          </li>
          <li>
            <strong>keyを指定した出し分け:</strong> 同じ位置でも{" "}
            <code>key</code>{" "}
            が変われば、Reactはそれを「別物」として認識し、古いStateを破棄して新しく作り直します。
          </li>
          <li>
            <strong>mapでのkey:</strong> 配列で <code>key</code>{" "}
            が必要なのも同じ理由です。要素が入れ替わった時に、どのStateが誰のものかをReactが迷わないようにするためです。
          </li>
        </ul>
      </div>
    </div>
  );
}
