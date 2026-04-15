import { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Chart.jsのインポート

export default function ChartDemo() {
  // 1. Canvas要素へアクセスするためのRef
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 2. 作成したグラフのインスタンスを保持するためのRef
  // (これは画面表示用ではなく、後でグラフを破棄したり更新したりするために「覚えておく」ためのRef)
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    // レンダリング後、canvasRef.current が確実に存在する時のみ実行
    if (canvasRef.current) {
      // グラフが二重に描画されないよう、既存のグラフがあれば破棄する
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // 3. 外部ライブラリ(Chart.js)を初期化
      // 第一引数に実際のDOM要素(canvasRef.current)を渡す
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "好きな色投票",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
    }

    // クリーンアップ関数（コンポーネントが消える時にグラフを破棄する）
    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []); // 初回レンダリング時のみ実行

  return (
    <div style={{ width: "500px", margin: "0 auto", padding: "20px" }}>
      <h3>外部ライブラリ (Chart.js) との連携</h3>
      {/* 4. このRefを通してChart.jsがこのcanvasにアクセスする */}
      <canvas ref={canvasRef} />
    </div>
  );
}
