import { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

// --- 親コンポーネント ---
export default function UseCallbackCompleteDemo() {
  const [count, setCount] = useState(0); // 全体の再レンダリング用
  const [toggle, setToggle] = useState(false); // 特定の依存配列用

  // パターン1: useCallbackなし (毎回新しい関数が生成される)
  const handleNoMemo = () => {
    console.log("No Memo clicked");
  };

  // パターン2: useCallback(空の依存配列) (最初の1回だけ生成、ずっと使い回す)
  const handleWithMemoEmptyDeps = useCallback(() => {
    console.log("Empty Deps clicked");
  }, []);

  // パターン3: useCallback(依存配列あり) (toggleが変わった時だけ生成し直す)
  const handleWithMemoActiveDeps = useCallback(() => {
    console.log("Active Deps clicked", toggle);
  }, [toggle]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>useCallback 比較デモ</h1>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h3>親のState操作</h3>
        {/* これを押すと親全体が再レンダリングされる */}
        <button onClick={() => setCount((c) => c + 1)}>
          1. 親を再レンダリング (count: {count})
        </button>

        {/* これを押すと、パターン3の依存先だけが変わる */}
        <button
          onClick={() => setToggle((t) => !t)}
          style={{ marginLeft: "10px" }}
        >
          2. 依存Stateを変更 (toggle: {String(toggle)})
        </button>
      </div>

      <p>※ コンソールを見て、どの子コンポーネントが動いたか確認してください</p>

      {/* --- パターン1 --- */}
      <ChildButton
        title="パターン1: メモ化なし（親が動くと毎回再描画）"
        borderColor="#dc143c"
        logColor="#dc143c"
        onClick={handleNoMemo}
      />

      {/* --- パターン2 --- */}
      <ChildButton
        title="パターン2: useCallback([]) （親が動いても再描画されない）"
        borderColor="#7fff00"
        logColor="#7fff00"
        onClick={handleWithMemoEmptyDeps}
      />

      {/* --- パターン3 --- */}
      <ChildButton
        title="パターン3: useCallback([toggle]) （toggle変更時のみ再描画）"
        borderColor="#00bfff"
        logColor="#00bfff"
        onClick={handleWithMemoActiveDeps}
      />

      <hr />

      <h3>使いどころ</h3>
      <ul>
        <li>
          React.memo を使っている子コンポーネントに関数を渡すとき（これが 9
          割です）。
        </li>
        <li>useEffect の依存配列の中に関数を入れる必要があるとき。</li>
      </ul>

      <h3>やりがちな間違い</h3>
      <ul>
        <li>
          React.memo を使っていない子コンポーネントに useCallback した関数を渡す
        </li>
      </ul>
    </div>
  );
}
