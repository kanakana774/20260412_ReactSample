import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  outer: {
    padding: "40px",
    backgroundColor: "#3498db",
    color: "white",
    borderRadius: "8px",
  },
  inner: {
    padding: "40px",
    backgroundColor: "#2ecc71",
    borderRadius: "8px",
    cursor: "pointer",
  },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
};

export const BubblingDemo = () => {
  const handleOuterClick = () => alert("青い枠（親）がクリックされました");
  const handleInnerClick = () => alert("緑の枠（子）がクリックされました");

  const handleButtonClick = (e: React.MouseEvent) => {
    // 💡 これをコメントアウトすると、親やその上のイベントも連鎖して発生します
    e.stopPropagation();
    alert("ボタンがクリックされました（伝播を止めています）");
  };

  return (
    <div style={styles.outer} onClick={handleOuterClick}>
      親 (Blue)
      <div style={styles.inner} onClick={handleInnerClick}>
        子 (Green)
        <div style={{ marginTop: "10px" }}>
          <button style={styles.button} onClick={handleButtonClick}>
            イベント伝播を停止
          </button>
          <button
            style={{ ...styles.button, marginLeft: "10px" }}
            onClick={() => alert("ボタン（連鎖します）")}
          >
            連鎖するボタン
          </button>
        </div>
      </div>
    </div>
  );
};
