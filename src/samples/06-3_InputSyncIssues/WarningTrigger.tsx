import { useState } from "react";

export const WarningTrigger = () => {
  // ※2 初期値を undefined (または null) にしてしまう
  const [val, setVal] = useState<string | undefined>(undefined);

  // 再レンダリング確認用
  console.log("%cWarningTrigger：" + val, "color:crimson;");

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #c0392b",
        borderRadius: "8px",
      }}
    >
      <h4>🚨 警告が発生するケース (Consoleを確認)</h4>
      <input
        value={val} // ※2 💡最初は undefined なので「非制御」とみなされる
        onChange={(e) => setVal(e.target.value)} // ※2 入力した瞬間に string になり「制御」に切り替わる
        placeholder="一文字打つと警告が出ます"
        style={{ padding: "8px", width: "100%" }}
      />
      <p style={{ fontSize: "0.8rem", color: "#c0392b" }}>
        初期値が undefined
        だと、Reactは最初「この入力欄は管理しなくていいんだな（非制御）」と判断します。
        その後、文字が入ってStateが更新されると、急に「制御」に変わるため、Reactが混乱して警告を出します。
      </p>
    </div>
  );
};
