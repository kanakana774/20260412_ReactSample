import { useState } from "react";

export const InputNumberPattern = () => {
  // ※1 数値でstateを持つ場合、、、
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);

  // 再レンダリング確認用
  console.log("%c再レンダリング：" + num1, "color:chartreuse;");
  console.log("%c再レンダリング：" + num2, "color:chartreuse;");

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid #7fff00",
        borderRadius: "8px",
      }}
    >
      <h4>数字の場合</h4>
      <input
        value={num1 ?? ""}
        onChange={(e) =>
          setNum1(
            e.target.value === "" || Number.isNaN(Number(e.target.value)) // ※1 数値以外入力できないというような扱いにするしかない。。。
              ? null
              : Number(e.target.value),
          )
        }
        style={{ padding: "8px", width: "100%" }}
      />
      <p>数値以外が入力された際に弾かないといけないので、大変、、、</p>
      <input
        type="number"
        value={num2 ?? ""}
        onChange={(e) =>
          setNum2(e.target.value === "" ? null : Number(e.target.value))
        }
        style={{ padding: "8px", width: "100%" }}
      />
      <p>
        そもそもinputのtype属性をnubmerにして数値以外入らないようにするとか、、、
      </p>
    </div>
  );
};
