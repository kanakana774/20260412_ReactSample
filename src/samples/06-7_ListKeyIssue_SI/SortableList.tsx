import React, { useState } from "react";

// --- 各アイテムを表示するコンポーネント ---
const Item = ({ name }: { name: string }) => {
  // 各アイテムごとに独自のState（メモ）を持たせる
  const [memo, setMemo] = useState("");

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        marginBottom: "10px",
        backgroundColor: "#fff",
      }}
    >
      <strong>{name}</strong>
      <input
        type="text"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="ここにメモを入力..."
        style={{ marginLeft: "10px", padding: "4px" }}
      />
    </div>
  );
};

// --- リスト全体の管理コンポーネント ---
export const SortableList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "🍎 りんご" },
    { id: 2, name: "🍌 バナナ" },
    { id: 3, name: "🍇 ぶどう" },
  ]);

  // 配列を逆転させる
  const reverseItems = () => {
    setItems([...items].reverse());
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* 悪い例: Index を key にする */}
      <div
        style={{
          flex: 1,
          padding: "15px",
          backgroundColor: "#ffebee",
          borderRadius: "8px",
        }}
      >
        <h4> key={"{index}"}</h4>
        <p style={{ fontSize: "0.8rem" }}>並び替えると入力内容がズレます</p>
        {items.map((item, index) => (
          // ※1 並び替えの度に代わる値をkeyにしてはいけない
          <Item key={index} name={item.name} />
        ))}
      </div>

      {/* 良い例: 一意の ID を key にする */}
      <div
        style={{
          flex: 1,
          padding: "15px",
          backgroundColor: "#e8f5e9",
          borderRadius: "8px",
        }}
      >
        <h4>key={"{item.id}"}</h4>
        <p style={{ fontSize: "0.8rem" }}>並び替えても入力内容が維持されます</p>
        {items.map((item) => (
          // ※1 必ずkeyは一意性があり、不変なものに
          // ※2 またloopの一番外側の要素にkeyを振る
          <Item key={item.id} name={item.name} />
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={reverseItems}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          リストを反転させる
        </button>
      </div>
    </div>
  );
};
