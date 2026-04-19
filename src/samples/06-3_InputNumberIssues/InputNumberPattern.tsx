import { useState } from "react";

export const InputNumberPatterns = () => {
  // パターン1: type="text" で State を number | null で管理
  // 【落とし穴】「1.」や「-」などの「入力途中の状態」を保持できず、勝手に補正されてしまう
  const [valAsNumber, setValAsNumber] = useState<number | null>(null);

  // パターン2: type="number" を使用
  // 【特徴】ブラウザの機能に任せる。一番標準的だが、ブラウザごとに挙動が異なり、指数(e)などが入力できてしまう
  const [valHtmlNumber, setValHtmlNumber] = useState<number | null>(null);

  // パターン3: State は string で持ち、使う時に number に変換する（推奨）
  // 【メリット】ユーザーが入力した文字をそのまま表示でき、バリデーションも柔軟
  const [valAsString, setValAsString] = useState<string>("");

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* パターン1 */}
      <section style={{ border: "1px solid #ccc", padding: "10px" }}>
        <label>
          1. type="text" × 数値State{" "}
          <input
            type="text"
            value={valAsNumber ?? ""}
            onChange={(e) => {
              const rawValue = e.target.value;
              if (rawValue === "") {
                setValAsNumber(null);
                return;
              }
              const num = Number(rawValue);
              // 数値変換できない（NaN）場合は更新しない
              if (!Number.isNaN(num)) {
                setValAsNumber(num);
              }
            }}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        <p style={{ fontSize: "0.8rem", color: "red" }}>
          問題点: 「1.2」と打とうとして「1.」まで打つと、Number("1.") は 1
          になるため、小数点以下が打てなくなる。
          また、「-5」と打とうとして「-」を打った瞬間も、数値ではないため弾かれてしまう。
        </p>
      </section>

      {/* パターン2 */}
      <section style={{ border: "1px solid #ccc", padding: "10px" }}>
        <label>
          2. type="number" (HTML標準){" "}
          <input
            type="number"
            value={valHtmlNumber ?? ""}
            onChange={(e) => {
              // type="number" でも e.target.value は文字列で返ってくる
              const rawValue = e.target.value;
              setValHtmlNumber(rawValue === "" ? null : Number(rawValue));
            }}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        <p style={{ fontSize: "0.8rem" }}>
          特徴: ブラウザが数値以外をブロックしてくれる。
          ただし、「1e10（指数表記）」が入力可能だったり、マウスホイールで数字が変わってしまうなどのクセがある。
        </p>
      </section>

      {/* パターン3 */}
      <section style={{ border: "1px solid #ccc", padding: "10px" }}>
        <label>
          3. type="text" × 文字列State (一般的な解決策？){" "}
          <input
            type="text"
            value={valAsString}
            onChange={(e) => {
              const value = e.target.value;
              // 数字と一部の記号以外は入力を許可しない（簡易的なバリデーション）
              // if (/^[0-9.-]*$/.test(value)) {
              setValAsString(value);
              // }
            }}
            style={{ display: "block", width: "100%" }}
          />
        </label>
        <p style={{ fontSize: "0.8rem" }}>
          利点: 「1.00」や「-」など、入力中の文字をそのまま保持できる。
          <br />
          <strong>
            計算で使う時だけ <code>Number({valAsString})</code> すれば良い。
          </strong>
        </p>
        <p>変換後の値: {valAsString === "" ? "(空)" : Number(valAsString)}</p>
      </section>
    </div>
  );
};
