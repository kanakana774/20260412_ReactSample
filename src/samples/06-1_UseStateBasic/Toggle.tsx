import React, { useState } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "15px",
    border: "1px solid #00ff00",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  box: {
    padding: "20px",
    marginTop: "10px",
    textAlign: "center",
    borderRadius: "5px",
  },
};

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  // 再レンダリング確認用
  console.log("%cToggle：" + isOn, "color:chartreuse;");

  // ※4 別にこうして一度変数に入れても同じ意味。ここならif文などの「文」も使える。
  // const content = isOn && (
  //   <div
  //     style={{
  //       ...styles.box,
  //       backgroundColor: "#fff3cd",
  //       color: "#856404",
  //     }}
  //   >
  //     💡 明かりがつきました！
  //   </div>
  // );

  return (
    <div style={styles.container}>
      <h3>2. 真偽値の管理 (Toggle)</h3>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "OFFにする" : "ONにする"}
      </button>

      {/* ※3 論理演算子でuiの表示分け */}
      {isOn && (
        <div
          style={{
            ...styles.box,
            backgroundColor: "#fff3cd",
            color: "#856404",
          }}
        >
          💡 明かりがつきました！
        </div>
      )}
      {/* ※4 上で変数に入れたjsxをここに貼る */}
      {/* content */}
    </div>
  );
};
