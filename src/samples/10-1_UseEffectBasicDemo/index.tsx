import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // パターン1: 依存配列なし
  // レンダリングされるたびに毎回実行される
  useEffect(() => {
    console.log("パターン1: 依存配列なし - 毎回実行される");
  });

  // パターン2: 空の依存配列 []
  // 初回マウント時のみ実行される
  useEffect(() => {
    console.log("パターン2: 空の依存配列 [] - 初回のみ実行される");
  }, []);

  // パターン3: 特定の値 [count] を指定
  // count の値が変化した時だけ実行される
  useEffect(() => {
    console.log(`パターン3: [count] 指定 - countが ${count} になりました`);
  }, [count]);

  // パターン4: クリーンアップ関数の確認
  useEffect(() => {
    console.log("パターン4: エフェクト開始");

    return () => {
      // 次回実行時、またはコンポーネントが消える時に実行される
      console.log("パターン4: クリーンアップ（前回の後始末）");
    };
  }, [count]);

  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2>useEffect 動作確認</h2>

        <div style={{ marginBottom: "20px" }}>
          <p>Count: {count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Countを増やす (エフェクト3, 4に影響)
          </button>
        </div>

        <div>
          <p>Other Count: {otherCount}</p>
          <button onClick={() => setOtherCount((prev) => prev + 1)}>
            Otherを増やす (エフェクト1のみに影響)
          </button>
        </div>

        <div style={{ marginTop: "20px", fontSize: "0.9em", color: "#666" }}>
          コンソールで確認してみる
        </div>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h3>useEffect を使うべき時</h3>
        <ul>
          <li>
            <strong>「画面が表示された時」</strong>
            に自動でデータを取得したい場合。
          </li>
          <li>
            <strong>
              「特定のState（検索キーワードやページ番号など）が変わった時」
            </strong>
            に自動で再取得したい場合。
          </li>
          <li>
            いわゆる「同期（Synchronization）」の処理。画面の状態と外部データ（AliI）を同期させるのが目的の時です。
          </li>
        </ul>

        <h3>useEffect を使うべきではない時（アンチパターン）</h3>
        <ul>
          <li>
            <strong>「ボタンを押した時」</strong>
            にデータを取得/送信したい。
          </li>
          <li>
            理由:
            それは「イベント」です。useEffectではなく、ボタンのonClickハンドラ内で直接fetchを呼び出すべきです。
          </li>
          <li>
            <strong>「フォームを送信（Submit）した時」</strong>
          </li>
          <li>理由: これもイベントです。onSubmitの中で実行しましょう。</li>
        </ul>
      </div>
    </>
  );
};

export default UseEffectDemo;
