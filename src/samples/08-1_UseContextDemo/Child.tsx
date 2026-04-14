import GrandChild from "./GrandChild";

// ---------------------------------------------------
// 3. 子コンポーネント（ただの通り道）
// ---------------------------------------------------
const Child = () => {
  console.log(
    "%c[Render] 子コンポーネント",
    "color: #99ff99; border: 1px solid #99ff99;",
  );

  return (
    <div
      style={{ border: "2px solid #99ff99", padding: "10px", margin: "10px" }}
    >
      <p>子です（私は何も Props を受け取っていません）</p>
      <GrandChild />
    </div>
  );
};

export default Child;
