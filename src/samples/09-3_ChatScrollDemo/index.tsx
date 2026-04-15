import { useState, useRef, useEffect } from "react";

export default function ChatScrollDemo() {
  const [messages, setMessages] = useState<string[]>(["こんにちは！"]);

  // 1. スクロールさせたい要素（メッセージのコンテナ）への参照を作成
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  // メッセージを追加する関数
  const addMessage = () => {
    setMessages((prev) => [...prev, "新しいメッセージです！"]);
  };

  // 2. messages が更新されるたびに、一番下までスクロールさせる
  useEffect(() => {
    // ref.current は、レンダリングが終わった後に実際のDOM要素を指す
    // effectはレンダリング後に動くので最適ですわね
    if (scrollBottomRef.current) {
      // scrollIntoView はブラウザ標準のDOM操作メソッド
      scrollBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // メッセージが増えたときだけ実行

  return (
    <div style={{ padding: "20px" }}>
      <h3>自動スクロールのデモ</h3>

      {/* メッセージ表示エリア */}
      <div
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((m, i) => (
          <p key={i} style={{ height: "50px" }}>
            {m}
          </p>
        ))}

        {/* 3. この「空のdiv」を常に画面内に表示するように追いかける */}
        <div ref={scrollBottomRef} />
      </div>

      <button onClick={addMessage}>メッセージを追加</button>
    </div>
  );
}
