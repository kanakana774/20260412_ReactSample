import React, { useMemo } from "react";

interface Props {
  count: number;
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "10px",
    backgroundColor: "#fff",
    marginTop: "20px",
  },
  label: { fontSize: "0.8rem", color: "#666" },
  value: { fontSize: "1.5rem", fontWeight: "bold", color: "#2c3e50" },
};

export const HeavyResult = ({ count }: Props) => {
  // 💡 重い計算のシミュレーション関数
  const computeExpensiveValue = (num: number, label: string) => {
    console.log(`%c[Calc] ${label} 実行中...`, "color: #9b59b6");
    let i = 0;
    while (i < 100000000) i++; // 意図的に時間をかける
    return num * 2;
  };

  // ❌ 悪い例：レンダリングのたびに計算が走る
  const normalValue = computeExpensiveValue(count, "通常計算");

  // ✅ 良い例：useMemo で結果を保存
  // count が変わった時だけ computeExpensiveValue が実行される
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(count, "メモ化計算");
  }, [count]);

  return (
    <div style={styles.card}>
      <section style={{ marginBottom: "20px" }}>
        <p style={styles.label}>1. 通常計算の結果（毎回実行される）:</p>
        <p style={styles.value}>{normalValue}</p>
      </section>

      <section>
        <p style={styles.label}>2. メモ化計算の結果（必要な時だけ実行）:</p>
        <p style={styles.value}>{memoizedValue}</p>
      </section>
    </div>
  );
};
