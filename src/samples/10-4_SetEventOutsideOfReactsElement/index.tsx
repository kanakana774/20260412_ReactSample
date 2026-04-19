import { useState, useEffect } from "react";

const WindowResizeSample = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("Resize中...");
      setWidth(window.innerWidth);
    };

    // 1. リスナーを登録
    window.addEventListener("resize", handleResize);

    // 2. クリーンアップ（非常に重要！）
    return () => {
      console.log("クリーンアップ： リスナーを解除しました");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 初回のみ登録

  return <p>現在のウィンドウ幅: {width}px</p>;
};

export default WindowResizeSample;
