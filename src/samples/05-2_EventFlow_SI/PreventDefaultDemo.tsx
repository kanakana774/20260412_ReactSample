import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "20px",
  },
  link: {
    color: "#e74c3c",
    textDecoration: "underline",
    cursor: "pointer",
    display: "block",
    marginBottom: "10px",
  },
  contextArea: {
    padding: "20px",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "2px dashed #999",
  },
};

export const PreventDefaultDemo = () => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 💡 リンク先への移動を止める
    alert("リンクのデフォルト動作（移動）を止めました。");
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // 💡 右クリックメニューを止める
    alert("右クリックメニューを禁止しました（これもpreventDefaultです）");
  };

  return (
    <div style={styles.container}>
      <h3>デフォルト動作の抑制</h3>

      <a
        href="https://google.com"
        style={styles.link}
        onClick={handleLinkClick}
      >
        Googleに行けないリンク
      </a>

      <div style={styles.contextArea} onContextMenu={handleContextMenu}>
        ここで右クリックしてみてください
      </div>
    </div>
  );
};
