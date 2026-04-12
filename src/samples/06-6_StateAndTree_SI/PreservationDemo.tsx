import { useState } from "react";
import { Counter } from "./Counter";

export const PreservationDemo = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #3498db",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h4>1. 同じ位置での出し分け（Stateが残る）</h4>
      <p>Player Aで加点してから切り替えてみてください。</p>

      {/* JSX内の三項演算子（式）による出し分け */}
      {/* ※1 同じ階層に同じタグが出された場合、reactは前と同じモノとみなします */}
      {isPlayerA ? (
        <Counter person="Player A" />
      ) : (
        <Counter person="Player B" />
      )}

      <button
        style={{ marginTop: "10px" }}
        onClick={() => setIsPlayerA(!isPlayerA)}
      >
        プレイヤー切り替え
      </button>

      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        ※Reactはツリー上の「同じ場所」にある同じコンポーネントのStateを保持し続けます。
      </p>
    </div>
  );
};
