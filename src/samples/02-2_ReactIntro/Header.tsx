const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#20232a",
    color: "#61dafb",
    padding: "60px 20px",
    textAlign: "center",
  },
  title: { fontSize: "3rem", margin: 0 },
  tagline: { color: "#fff", fontSize: "1.2rem", marginTop: "10px" },
};

export function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>React</h1>
      <p style={styles.tagline}>
        ユーザインターフェース構築のためのJavaScriptライブラリ
      </p>
    </header>
  );
}
