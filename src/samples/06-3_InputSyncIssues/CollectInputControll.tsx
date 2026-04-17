import { useState } from "react";

export const CollectInputControll = () => {
  // ※3 初期値が空文字なので大丈夫
  const [val, setVal] = useState("");

  // 再レンダリング確認用
  console.log("%cWarningTrigger：" + val, "color:chartreuse;");

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #7fff00",
        borderRadius: "8px",
      }}
    >
      <h4>正しいケース</h4>
      <input
        value={val} // ※3 初期値からちゃんと空文字入ってるので、react制御状態
        onChange={(e) => setVal(e.target.value)}
        placeholder="安全"
        style={{ padding: "8px", width: "100%" }}
      />
      <p style={{ fontSize: "0.8rem", color: "#7fff00" }}>
        初期値が 空文字 なので、Reactは最初から制御状態です。
      </p>
    </div>
  );
};
