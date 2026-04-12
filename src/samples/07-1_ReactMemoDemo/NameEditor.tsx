import React from "react";

interface Props {
  name: string;
  onNameChange: (newName: string) => void;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { padding: "15px", border: "1px solid #ddd", borderRadius: "8px" },
  input: { padding: "8px", width: "100%", marginTop: "5px" },
};

export const NameEditor = ({ name, onNameChange }: Props) => {
  // 再レンダーを確認するためのログ
  console.log("%c[Render] NameEditor (入力)", "color: #3498db");

  return (
    <div style={styles.container}>
      <label>
        名前を編集：
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          style={styles.input}
        />
      </label>
    </div>
  );
};
