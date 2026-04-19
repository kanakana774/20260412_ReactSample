import { useState, useMemo } from "react";
import ResultDisplay from "./ResultDisplay";

// --- 重い計算関数の定義 ---
const performHeavyCalculation = (num: number, label: string, color: string) => {
  console.log(
    `%c[計算中...] ${label} (値: ${num})`,
    `color: ${color}; font-weight: bold;`,
  );

  // 意図的に時間を稼ぐ（30億回のループ）
  let i = 0;
  while (i < 3000000000) i++;

  return num * 10;
};

export default function HeavyMemoDemo() {
  const [count, setCount] = useState(0);
  const [targetNum, setTargetNum] = useState(1);

  // パターン1: メモ化なし
  // 親が再レンダリングされるたびに「30億回のループ」が実行される
  // ⇒ 関係ない「count」を更新するだけでも画面がフリーズする
  const noMemoValue = performHeavyCalculation(
    targetNum,
    "メモ化なし",
    "#dc143c",
  );

  // パターン2: useMemoあり
  // targetNum が変わった時だけ「30億回のループ」が実行される
  // ⇒ count を更新する時は、前回の結果を再利用するので一瞬で終わる
  const memoValue = useMemo(() => {
    return performHeavyCalculation(targetNum, "useMemoあり", "#7fff00");
  }, [targetNum]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>useMemo 重い処理のシミュレーション</h1>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3>操作パネル</h3>

        {/* 重要：このボタンを押した時の「反応速度」に注目 */}
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          1. 関係ないStateを更新 (Count: {count})
        </button>

        <button
          onClick={() => setTargetNum((t) => t + 1)}
          style={{ marginLeft: "10px", padding: "10px" }}
        >
          2. 計算対象の値を変更
        </button>

        <p style={{ color: "#666" }}>
          ※「1」を押したとき、メモ化なしの方は毎回30億回計算するので、
          <br />
          <strong>画面がカクついたり、ボタンの数値が遅れて変わります。</strong>
        </p>
      </div>

      <ResultDisplay
        title="パターン1: メモ化なし (毎回計算)"
        value={noMemoValue}
        borderColor="#dc143c"
        logColor="#dc143c"
      />

      <ResultDisplay
        title="パターン2: useMemo([targetNum])"
        value={memoValue}
        borderColor="#7fff00"
        logColor="#7fff00"
      />
    </div>
  );
}
