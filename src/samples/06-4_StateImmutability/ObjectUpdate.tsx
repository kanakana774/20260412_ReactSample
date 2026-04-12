import React, { useState } from "react";

export const ObjectUpdate = () => {
  const [user, setUser] = useState({ name: "田中", age: 20 });

  // 失敗例：中身だけ書き換える（ミュータブル）
  const updateWrong = () => {
    user.name = "佐藤"; // ※2 直接書き換え というか普通にエラーでますね。。。
    console.log("Stateの中身:", user);
    setUser(user); // ※2 参照が同じなので再レンダーをトリガーしない。
  };

  // 成功例：新しいオブジェクトを作る（イミュータブル）
  const updateRight = () => {
    // ※ スプレッド構文 (...) で中身をコピーし、新しい住所のオブジェクトを作る
    setUser({ ...user, name: "佐藤" });
  };

  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        marginBottom: "20px",
      }}
    >
      <h4>1. オブジェクトの更新：田中から佐藤に変更</h4>
      <p>
        名前: {user.name} / 年齢: {user.age}
      </p>

      <button onClick={updateWrong} style={{ backgroundColor: "#ffcccc" }}>
        中身だけ（失敗）
      </button>
      <button
        onClick={updateRight}
        style={{ backgroundColor: "#ccffcc", marginLeft: "10px" }}
      >
        新しいオブジェクトで更新（成功）
      </button>
    </div>
  );
};
