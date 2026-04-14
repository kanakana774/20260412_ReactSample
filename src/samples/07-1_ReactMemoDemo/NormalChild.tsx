// --- ① 普通のコンポーネント（メモ化なし） ---
const NormalChild = ({ name }: { name: string }) => {
  console.log(
    "%c[Normal] 子コンポーネントがレンダリングされました",
    "color: #00bfff",
  );
  return (
    <div
      style={{ border: "1px solid #00bfff", margin: "10px", padding: "10px" }}
    >
      <p>名前: {name} (メモ化なし)</p>
    </div>
  );
};

export default NormalChild;
