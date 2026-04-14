import { useState } from "react";
import NormalChild from "./NormalChild";
import MemoizedChild from "./MemoizedChild";

// --- 親コンポーネント ---
export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("TypeScript");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo のデモ</h2>

      <div style={{ marginBottom: "20px" }}>
        <p>カウント: {count}</p>
        {/* このボタンを押すと、親の state が変わるので親が再レンダリングされる */}
        <button onClick={() => setCount((prev) => prev + 1)}>
          カウントアップ
        </button>

        {/* 名前の state を変えるボタン */}
        <button
          onClick={() =>
            setName(name === "TypeScript" ? "JavaScript" : "TypeScript")
          }
        >
          名前を変更
        </button>
      </div>

      {/* 1. 普通の子。親が動けば、Propsが変わってなくても動く */}
      <NormalChild name={name} />

      {/* 2. メモ化した子。Props(name) が変わった時だけ動く */}
      <MemoizedChild name={name} />

      <hr />
      <section>
        <h3>いつ使うべきか？</h3>
        <small>
          「何でもかんでも React.memo
          すればいい」というわけではありません。メモ化には「前回の Props
          と今回の Props を比較する」というコストがかかるからです。
        </small>
        <ul>
          <li>使うべき場面</li>
          <ul>
            <li>
              子コンポーネントの表示内容が重い（大量のリスト表示、複雑な計算など）。
            </li>
            <li>
              親コンポーネントが頻繁に更新される（タイマー、入力フォーム、スクロールイベントなど）。
            </li>
            <li>子コンポーネントに渡す Props がシンプルで変化しにくい。</li>
          </ul>

          <li>使わなくていい場面</li>

          <ul>
            <li>
              子コンポーネントが非常に軽く、再描画のコストが無視できる場合。
            </li>
            <li>
              親が更新されるとき、ほぼ確実にその子コンポーネントの Props
              も変わる場合（比較するだけ無駄）。
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
}
