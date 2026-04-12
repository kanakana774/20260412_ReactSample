import React from "react";

interface Props {
  onClick: () => void;
  label: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#fff",
    border: "2px solid #333",
    borderRadius: "5px",
    margin: "10px",
  },
};

// React.memo でラップしているので、本来は Props が変わらない限り再描画されないはず
export const MemoButton = React.memo(({ onClick, label }: Props) => {
  console.log(`%c[Render] ${label}`, "color: #e67e22; font-weight: bold;");

  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
});
