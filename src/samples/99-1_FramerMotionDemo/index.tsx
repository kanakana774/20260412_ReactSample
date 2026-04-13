import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

export default function FramerParallax() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      {/* 導入用余白 */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ opacity: 0.5 }}>Scroll Down</p>
      </div>

      {/* パララックスセクション 1 */}
      <ParallaxSection
        title="ADVENTURE"
        subtitle="Explore the unknown world"
        img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
      />

      {/* パララックスセクション 2 */}
      <ParallaxSection
        title="HORIZON"
        subtitle="Where the sky meets the sea"
        img="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000"
      />

      <div style={{ height: "100vh" }} />
    </div>
  );
}

function ParallaxSection({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: string;
}) {
  const ref = useRef(null);

  // スクロール進捗の検知 (0 = 画面下端に入った, 1 = 画面上端に消えた)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // バネのような滑らかな動き（ぬるぬる感の正体）
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- アニメーションの設定 ---
  // 画像の動き: 下から上へ移動しながら、1倍から1.2倍にズーム
  const y = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  // 文字の動き: 画像より「速く」動かすことで視差を強調
  const textY = useTransform(smoothProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 背景画像レイヤー */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%", // コンテナより高くして「遊び」を作る
          y,
          scale,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* 暗めのオーバーレイ（文字を読みやすく） */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
          }}
        />
      </motion.div>

      {/* コンテンツレイヤー */}
      <motion.div
        style={{
          zIndex: 1,
          y: textY,
          textAlign: "center",
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <TextReveal>
          <h2
            style={{
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 900,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "0.5em",
            }}
          >
            {subtitle}
          </p>
        </TextReveal>
      </motion.div>
    </section>
  );
}

// 画面に入った時に下からフワッと出てくるコンポーネント
function TextReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
