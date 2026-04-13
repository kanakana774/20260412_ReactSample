import { useRef } from "react";
const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
  },

  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "320px",
    padding: "30px",
    borderRadius: "16px",

    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",

    color: "white",
    display: "flex",
    flexDirection: "column",
  },

  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
};

export default function LoginPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div style={styles.container}>
      {/* 背景動画 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
        src="https://cdn.coverr.co/videos/coverr-from-the-side-of-a-boat-2089/720p.mp4"
      />

      {/* オーバーレイ（暗くする） */}
      <div style={styles.overlay} />

      {/* ログインカード */}
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <button style={styles.button}>ログイン</button>
      </div>
    </div>
  );
}
