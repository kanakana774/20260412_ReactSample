import React from "react";

// --- Propsの型定義 ---
interface ContentFrameProps {
  title: string;
  // ※2 React.ReactNode は「JSXで書けるものなら何でもOK」という型。childrenにはこれを設定する。
  children: React.ReactNode;
  borderColor?: string; // オプション（任意）のProps
}

// --- スタイル定義 ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: "2px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#fff",
    marginBottom: "20px",
    overflow: "hidden",
  },
  titleBar: {
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
  },
  body: {
    padding: "20px",
  },
};

export const ContentFrame = ({
  title,
  children,
  borderColor = "#ddd",
}: ContentFrameProps) => {
  return (
    <section style={{ ...styles.container, borderColor: borderColor }}>
      <div style={styles.titleBar}>
        <span>{title}</span>
        <small style={{ color: "#999" }}>Frame Component</small>
      </div>

      {/* ここに呼び出し側で囲んだ中身が表示される */}
      {/* ※1 受け取ったchildrenには内側の要素すべてが入ってる。 */}
      <div style={styles.body}>{children}</div>
    </section>
  );
};
