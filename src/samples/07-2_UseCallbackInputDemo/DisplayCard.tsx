import React from "react";

interface Props {
  title: string;
  onAction: () => void; // 実効はしないが、Propsとして受け取る関数
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "2px solid #333",
    backgroundColor: "#fff",
  },
};

// React.memo で囲んでいるので、Props(title, onAction) が変わらない限り
// 再描画されないはずのコンポーネント
export const DisplayCard = React.memo(({ title, onAction }: Props) => {
  console.log(`%c[Render] ${title}`, "color: #e67e22; font-weight: bold;");

  return (
    <div style={styles.card}>
      <strong>{title}</strong>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        ※コンソールで再レンダーを確認してください
      </p>
    </div>
  );
});
