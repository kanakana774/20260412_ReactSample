import React from "react";
import { useCount } from "./countContext";
import { CountProvider } from "./CountProvider";

// 【A】Contextを「使う」コンポーネント
const ConsumerComponent = () => {
  const { count, increment } = useCount();
  console.log("ConsumerComponent: レンダリングされました");

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h4>Consumer (Contextを使う)</h4>
      <p>Count: {count}</p>
      <button onClick={increment}>増加</button>
    </div>
  );
};

// 【B】Contextを「使わない」中間コンポーネント
// childrenとして中身を受け取るのがポイント（後述）
const IntermediateComponent = ({ children }: { children: React.ReactNode }) => {
  console.log("IntermediateComponent: レンダリングされました");

  return (
    <div style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
      <h4>Intermediate (Contextを使わない)</h4>
      {children}
    </div>
  );
};

// 呼び出し側
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>useContext 再レンダリング確認</h2>
      <CountProvider>
        {/* 
          ここが重要
          Providerの中でIntermediateを直接「描画」するのではなく
          「children」として渡すことで、再レンダリングをスキップできます
        */}
        <IntermediateComponent>
          <ConsumerComponent />
        </IntermediateComponent>
      </CountProvider>
    </div>
  );
}
