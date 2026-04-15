import React from "react";
import { ActionButton } from "./ActionButton";
import { InputSection } from "./InputSection";

const styles: { [key: string]: React.CSSProperties } = {
  page: { padding: "30px", fontFamily: "sans-serif" },
  logArea: { marginTop: "20px", padding: "10px", backgroundColor: "#eee" },
};

export default function EventHandlers() {
  let text = "";

  // 親側で実際の処理(関数)を定義する
  // ※1 ハンドラの命名規則：handle + イベント名（または動詞）
  const handleSave = () => {
    alert("保存ボタンがクリックされました！");
  };

  // ※2 TSなのでインラインで定義しない関数の引数の型は明示
  const handleInputChange = (value: string) => {
    console.log("入力中の文字:", value);

    // ※3 入力した内容で画面の表示を変更してみるが。。。できない、、、
    text = value;
  };

  const handleFormSubmit = () => {
    alert("フォームが送信されました！");
  };

  return (
    <div style={styles.page}>
      <h2>イベントハンドラの学習</h2>

      <section>
        <h3>1. クリックイベント (Props経由)</h3>
        {/* ※3 onAction={handleSave()}は関数呼び出しなのでダメ */}
        <ActionButton label="保存する" onAction={handleSave} color="#2ecc71" />
        <ActionButton
          label="削除する"
          // ※2 インラインで定義することも可能
          onAction={() => console.log("削除を実行します")}
          color="#e74c3c"
        />
      </section>

      <section>
        <h3>2. 入力と送信</h3>
        <InputSection
          onTextChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      </section>

      {/* // ※3 入力した内容で画面の表示を変更してみるが。。。できない、、、 */}
      <h3>入力内容：{text}</h3>

      <div style={styles.logArea}>
        <p>★ 動作の詳細はブラウザのコンソールを確認</p>
      </div>
    </div>
  );
}
