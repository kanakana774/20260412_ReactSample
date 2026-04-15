import { useEffect, useRef, useState } from "react";

export default function ParallaxFade() {
  const containerRef = useRef<HTMLDivElement | null>(null); // 親コンテナを参照
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 要素が画面の中央からどれだけ離れているかを計算 (-1 〜 1)
      const containerCenter = rect.top + rect.height / 2;
      const screenCenter = viewportHeight / 2;
      const distanceFromCenter =
        (containerCenter - screenCenter) / (viewportHeight / 2);

      // 移動量の調整（0.5 = 50%分動かす）
      // 数値を大きくするほど動きが激しくなります
      const movement = distanceFromCenter * 100;

      // transformで位置をずらす
      // centerに配置した状態(top: -40%)から上下に動かす
      bgRef.current.style.transform = `translate3d(0, ${movement}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div style={{ height: "80vh" }} />

      <section
        ref={containerRef}
        style={{
          position: "relative",
          height: "500px", // 少し高くするとよりパララックス感
          overflow: "hidden",
        }}
      >
        {/* 背景 */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            top: "-40%", // 上下に40%ずつ余白を持たせる（計180%）
            left: 0,
            width: "100%",
            height: "180%", // ここを高くするほど「遊び」ができる
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform", // パフォーマンス向上
          }}
        />

        {/* コンテンツ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.2)", // 文字を見やすく
          }}
        >
          <FadeIn>
            <h1
              style={{ color: "white", fontSize: "40px", textAlign: "center" }}
            >
              Parallax Demo
            </h1>
          </FadeIn>
        </div>
      </section>

      <div style={{ height: "100vh" }} />
    </div>
  );
}

// フェードインコンポーネント（変更なし）
function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 1.2s ease-out",
      }}
    >
      {children}
    </div>
  );
}
