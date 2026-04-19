import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const [inputName, setInputName] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputName.trim()) {
      login(inputName); // ここでStateを更新するだけ！保存はuseEffectが勝手にやる
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "10px", border: "1px dashed #ccc" }}
    >
      <h4>ログインしてください</h4>
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="名前を入力"
      />
      <button type="submit">ログイン</button>
    </form>
  );
};

export default LoginForm;
