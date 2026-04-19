import React from "react";

// --- 子コンポーネント (React.memoで囲む) ---
type ChildProps = {
  title: string;
  borderColor: string;
  logColor: string;
  onClick: () => void;
};

const ChildButton = React.memo(
  ({ title, borderColor, logColor, onClick }: ChildProps) => {
    console.log(
      `%c[Render] ${title}`,
      `color: ${logColor}; font-weight: bold;`,
    );

    return (
      <div
        style={{
          border: `3px solid ${borderColor}`,
          padding: "10px",
          margin: "10px 0",
          borderRadius: "8px",
        }}
      >
        <p style={{ margin: 0 }}>{title}</p>
        {/* このボタンは今回押しませんが、Propsとして関数を受け取っています */}
        <button onClick={onClick}>子のボタン</button>
      </div>
    );
  },
);

export default ChildButton;
