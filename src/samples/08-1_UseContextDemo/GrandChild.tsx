import { useContext } from "react";
import { UserContext } from "./userContext";

// ---------------------------------------------------
// 2. 孫コンポーネント（受け取る人）
// ---------------------------------------------------
const GrandChild = () => {
  // useContext を使って、UserContext の中身を直接取り出す
  const userName = useContext(UserContext);

  console.log(
    "%c[Render] 孫コンポーネント",
    "color: #9999ff; border: 1px solid #9999ff;",
  );

  return (
    <div style={{ border: "2px solid #9999ff", padding: "10px" }}>
      <p>
        孫です。こんにちは、<strong>{userName}</strong>さん！
      </p>
    </div>
  );
};

export default GrandChild;
