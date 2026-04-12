import React from "react";

interface InputSectionProps {
  // 文字列を引数に取る関数の型
  onTextChange: (value: string) => void;
  // フォーム送信時の関数の型
  onFormSubmit: () => void;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    padding: "8px",
    width: "200px",
    marginRight: "10px",
  },
};

export const InputSection = ({
  onTextChange,
  onFormSubmit,
}: InputSectionProps) => {
  // ※2 TypeScriptでは、イベントの種類を型で指定すると補完が効いて便利です
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onTextChange(e.target.value);
  // };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロードを防ぐ（重要！）
    onFormSubmit();
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="何か入力してください"
          style={styles.input}
          // ※2 インラインで定義すると引数が型推論されて便利
          onChange={(e) => {
            onTextChange(e.target.value);
          }}
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};
