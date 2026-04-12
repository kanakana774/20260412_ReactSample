import { useState } from "react";
import { Counter } from "./Counter";

export const KeyResetDemo = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #2ecc71",
        borderRadius: "8px",
      }}
    >
      <h4>2. keyを指定した出し分け（Stateが消える）</h4>
      <p>今度は切り替えるたびにスコアが0にリセットされます。</p>

      {/* ※1 key を変えることで、Reactは「古い方を破棄して新しい方を作る」動きになります */}
      {isPlayerA ? (
        <Counter key="A" person="Player A" />
      ) : (
        <Counter key="B" person="Player B" />
      )}

      <button
        style={{ marginTop: "10px" }}
        onClick={() => setIsPlayerA(!isPlayerA)}
      >
        プレイヤー切り替え
      </button>
    </div>
  );
};
