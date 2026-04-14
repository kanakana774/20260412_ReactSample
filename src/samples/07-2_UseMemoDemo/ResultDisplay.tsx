import React from "react";

type ResultDisplayProps = {
  title: string;
  value: number;
  borderColor: string;
  logColor: string;
};

// --- 子コンポーネント ---
const ResultDisplay = React.memo(
  ({ title, value, borderColor, logColor }: ResultDisplayProps) => {
    console.log(`%c[Render] ${title}`, `color: ${logColor}`);
    return (
      <div
        style={{
          border: `3px solid ${borderColor}`,
          padding: "10px",
          margin: "10px 0",
          borderRadius: "8px",
        }}
      >
        {title}: <strong>{value}</strong>
      </div>
    );
  },
);

export default ResultDisplay;
