import React from "react";

// --- 1. 通常のコンポーネント ---
export const HeavyComponent = ({ title }: { title: string }) => {
  console.log(`%c[Render] ${title}`, "color: #e74c3c; font-weight: bold;");

  // 重い処理をシミュレート
  let i = 0;
  while (i < 10000000) i++;

  return (
    <div
      style={{
        border: "1px solid #e74c3c",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <p>{title} (名前とは無関係)</p>
    </div>
  );
};

// --- 2. React.memo でラップしたコンポーネント ---
// Propsが変わらない限り、再描画をスキップする
export const MemoizedHeavyComponent = React.memo(HeavyComponent);
