import { useState, useRef } from "react";

export default function Basic() {
  const [renderCount, setRenderCount] = useState(0);

  // 1. Refを定義（レンダリングに関係ない値を保持する）
  const countRef = useRef(0);

  const incrementRef = () => {
    // ログで見ると、ボタンを押すたびに値が増えているのがわかる
    countRef.current += 1;
    console.log("Refの中身（更新されています）:", countRef.current);

    // 中身を見てみる
    console.dir(countRef);
  };

  const triggerRender = () => {
    // Stateを更新することで、強制的に再レンダリングを起こす
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>1. Refの値を確認する</h3>
      <p>※Refの値はブラウザのコンソールで確認</p>
      {/* 
        本来、refをここで表示するのは推奨されませんが、
        「再レンダリングが走った瞬間に最新のrefが読み込まれる」
        ことを確認するために、あえて表示させている。
      */}
      <p>Refの保持内容: {countRef.current}</p>
      <button onClick={incrementRef}>Refを増やす（ログに出力）</button>

      <hr />

      <h3>2. 再レンダリングを発生させる</h3>
      <p>画面の更新回数: {renderCount}</p>
      <button onClick={triggerRender}>Stateを更新して再描画</button>

      <hr />

      <div style={{ marginTop: "20px", color: "blue" }}>
        <strong>
          確認手順
          <br />
          1. 「Refを増やす」を数回押す（画面は何も変わらない）
          <br />
          2. コンソールを見て値が増えているのを確認する
          <br />
          3. 「Stateを更新」を押す
          <br />
          4.
          この瞬間に、溜まっていたRefの値が画面に反映される（※以下の表示で確認）
        </strong>
      </div>

      <hr />

      <div>
        <strong>
          refの役割
          <ul>
            <li>
              「値を保持するが、更新しても再レンダリングさせない」 ための箱
            </li>
            <li>「DOM要素に直接アクセスする」 ための手段</li>
          </ul>
        </strong>
      </div>
    </div>
  );
}
