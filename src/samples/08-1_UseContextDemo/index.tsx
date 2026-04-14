import Child from "./Child";
import { UserContext } from "./userContext";

// ---------------------------------------------------
// 4. 親コンポーネント（送る人）
// ---------------------------------------------------
export default function SimpleContextDemo() {
  return (
    // UserContext.Provider で囲むことで、その中にあるコンポーネントに値を送る
    <UserContext.Provider value="田中">
      <div style={{ border: "2px solid #ff9999", padding: "10px" }}>
        <h1>親です</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}
