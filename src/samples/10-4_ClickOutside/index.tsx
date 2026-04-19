import React, { useState, useRef, useEffect } from "react";

export default function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. メニュー全体を指すためのRef
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 2. クリックイベントが発生した時の処理
    const handleClickOutside = (event: MouseEvent) => {
      // menuRef.current が存在し、かつクリックされた要素(event.target)が
      // menuRef.current の「中」に含まれていない場合
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("外側がクリックされました！メニューを閉じます");
        setIsOpen(false);
      }
    };

    // 3. メニューが開いている時だけ、ドキュメント全体にクリックイベントを登録
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // 4. クリーンアップ関数：イベントリスナーを解除する
    // これを忘れると、コンポーネントが消えてもイベントだけ残り続けてバグの原因になる
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // isOpen が変わるたびに実行

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h3>クリックの外側判定デモ</h3>

      <div
        ref={menuRef} // 5. このdivを「内側」として認識させる
        style={{
          display: "inline-block",
          padding: "20px",
          background: "#f0f0f0",
          border: "1px solid #ccc",
          position: "relative",
        }}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "メニューを閉じる" : "メニューを開く"}
        </button>

        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "200px",
              background: "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "10px",
              marginTop: "5px",
              zIndex: 10,
            }}
          >
            <p>メニュー項目1</p>
            <p>メニュー項目2</p>
            <p>この中をクリックしても閉じません</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px", color: "#666" }}>
        <p>メニューを開いたあと、</p>
        <p>グレーの枠の「外」をクリックしてみてください。</p>
      </div>
    </div>
  );
}
