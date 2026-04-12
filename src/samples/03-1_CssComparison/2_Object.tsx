import React from "react";

// ※2 CSSProperties型を型注釈するとタイプミスを防いだり、少し補完が効いたりします。
const cardStyle: React.CSSProperties = {
  border: "2px solid #2ed573",
  padding: "15px",
  borderRadius: "8px",
  backgroundColor: "#e8fdf0",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  color: "#2ed573",
};

export default function ObjectStyle() {
  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>2. オブジェクト定数</h4>
      <p>変数にスタイルをまとめて管理する方法です。</p>
    </div>
  );
}
