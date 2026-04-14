import React from "react";
// --- ② メモ化されたコンポーネント ---
// React.memo() で囲むだけ！
const MemoizedChild = React.memo(({ name }: { name: string }) => {
  console.log(
    "%c[Memoized] 子コンポーネントがレンダリングされました",
    "color: #dc143c",
  );
  return (
    <div
      style={{ border: "1px solid #dc143c", margin: "10px", padding: "10px" }}
    >
      <p>名前: {name} (メモ化済み！)</p>
    </div>
  );
});

export default MemoizedChild;
