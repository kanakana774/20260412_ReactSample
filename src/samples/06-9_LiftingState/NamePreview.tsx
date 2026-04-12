import React from "react";

interface Props {
  name: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#ff8c00",
    color: "#20232a",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
};

export const NamePreview = ({ name }: Props) => {
  // 再レンダーを確認するためのログ
  console.log("%c[Render] NamePreview (表示側)", "color: darkorange");

  return (
    <div style={styles.card}>
      <h3>プレビューカード</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        こんにちは、{name || "ゲスト"} さん！
      </p>
    </div>
  );
};
