import React from "react";
import { ContentFrame } from "./ContentFrame";

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: "30px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
};

export default function ChildrenBasic() {
  return (
    <div style={styles.page}>
      <h2>Children の活用例</h2>
      <p>共通の「枠」の中に、異なるコンテンツを流し込む</p>

      {/* 例1: テキストと画像を入れる */}
      {/* ※1 外枠をコンポーネントにする */}
      <ContentFrame title="プロフィール" borderColor="#3498db">
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
            }}
          />
          <p>これは children を使って画像とテキストを流し込んでいる例</p>
        </div>
      </ContentFrame>

      {/* 例2: フォームを入れる */}
      <ContentFrame title="お問い合わせフォーム" borderColor="#e67e22">
        <form onSubmit={(e) => e.preventDefault()}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            お名前: <input type="text" style={{ width: "100%" }} />
          </label>
          <button type="button">送信する</button>
        </form>
      </ContentFrame>

      {/* 例3: 別のコンポーネント（リスト）を入れる */}
      <ContentFrame title="children が適しているケース" borderColor="#2ecc71">
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>共通の「枠組み（フレーム）」を作るとき</li>
          <li>汎用的なボタンやリンク</li>
          <li>特定のスタイルを当てるだけのラッパー</li>
        </ul>
      </ContentFrame>
    </div>
  );
}
