import { useState } from "react";

export const ArrayUpdate = () => {
  const [items, setItems] = useState(["りんご", "バナナ"]);

  // 失敗例：pushなどで元の配列をいじる
  const addWrong = () => {
    items.push("みかん"); // ※1 直接書き換え
    console.log("配列の中身:", items);
    setItems(items); // ※1 参照が同じなので再レンダーをトリガーしない。
  };

  // 成功例：新しい配列を作る
  const addRight = () => {
    // スプレッド構文で展開し、新しい配列を作成
    setItems([...items, "みかん"]);
  };

  const handleClear = () => setItems([]);

  return (
    <div style={{ padding: "15px", border: "1px solid #ddd" }}>
      <h4>2. 配列の更新：みかんを追加</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={addWrong} style={{ backgroundColor: "#ffcccc" }}>
        pushで追加（失敗）
      </button>
      <button
        onClick={addRight}
        style={{ backgroundColor: "#ccffcc", marginLeft: "10px" }}
      >
        新しい配列で更新（成功）
      </button>
      <button onClick={handleClear} style={{ marginLeft: "10px" }}>
        クリア
      </button>
    </div>
  );
};
