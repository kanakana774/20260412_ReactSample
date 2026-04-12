import React, { useState } from "react";
import { HeavyResult } from "./HeavyResult";

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: "30px", fontFamily: "sans-serif" },
  button: { padding: "10px 15px", marginRight: "10px", cursor: "pointer" },
};

export default function UseMemoDemo() {
  const [count, setCount] = useState(1);
  const [otherState, setOtherState] = useState(false);

  console.log("%c--- Parent Render ---", "color: #2ecc71; font-weight: bold;");

  return (
    <div style={styles.container}>
      <h2>useMemo の実験</h2>

      <div style={{ marginBottom: "20px" }}>
        <h4>計算に関係するState</h4>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          数値を増やす (現在の値: {count})
        </button>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h4>計算に【無関係】なState</h4>
        <button
          style={styles.button}
          onClick={() => setOtherState(!otherState)}
        >
          無関係なStateを更新 (現在の値: {String(otherState)})
        </button>
      </div>

      <hr />

      {/* 重い計算を行うコンポーネントに値を渡す */}
      <HeavyResult count={count} />

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#eee",
          fontSize: "0.9rem",
        }}
      >
        <h4>💡 実験手順</h4>
        <ol>
          <li>
            「数値を増やす」ボタンを押す → <strong>両方の計算</strong>
            が走り、画面更新が少し遅れます。
          </li>
          <li>
            「無関係なStateを更新」ボタンを押す → 本来は計算不要ですが、
            <strong>「通常計算」だけは再び実行</strong>
            され、動作が重くなります。<strong>「メモ化計算」</strong>
            はスキップされるため、負荷を抑えられます。
          </li>
        </ol>
      </div>
    </div>
  );
}
