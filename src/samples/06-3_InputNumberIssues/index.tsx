import { InputNumberPatterns } from "./InputNumberPattern";

export default function InputNumber() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>数値入力欄あれこれ</h2>

      <InputNumberPatterns />

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          marginTop: "20px",
          borderLeft: "5px solid #333",
        }}
      >
        <h4>
          数値以外が入力される可能性があるなら、数値もテキストでstateは管理したほうがよいのやも？
        </h4>
      </div>
    </div>
  );
}
