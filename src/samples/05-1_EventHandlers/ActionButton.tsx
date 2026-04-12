import React from "react";

interface ActionButtonProps {
  label: string;
  // 関数をPropsとして受け取る型定義。引数なし、戻り値なし(void)の場合。
  // ※関数をpropsで受け取る際のプロパティ名の命名規則：on + イベント名（または動詞）
  onAction: () => void;
  color?: string;
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    marginRight: "10px",
  },
};

export const ActionButton = ({
  label,
  onAction,
  color = "#3498db",
}: ActionButtonProps) => {
  return (
    <button
      style={{ ...styles.button, backgroundColor: color }}
      // ※ここのonClickなどはhtmlタグ要素によって固定
      onClick={onAction} // 親から渡された関数を実行
    >
      {label}
    </button>
  );
};
