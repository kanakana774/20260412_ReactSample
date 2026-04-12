export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "1rem",
      }}
    >
      <h1>HTMLセマンティクス学習</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <a href="#" style={{ color: "white" }}>
              ホーム
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white" }}>
              記事一覧
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white" }}>
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
