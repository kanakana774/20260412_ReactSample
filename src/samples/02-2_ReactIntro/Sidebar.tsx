const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    height: "fit-content",
  },
  list: { paddingLeft: "20px" },
  item: { marginBottom: "10px" },
};

export function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h3>学習リソース</h3>
      <ul style={styles.list}>
        <li>
          <a href="https://react.dev">React公式ドキュメント</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org">MDN Web Docs</a>
        </li>
      </ul>
      <h3>関連キーワード</h3>
      <p>
        <span
          style={{
            fontSize: "0.8rem",
            background: "#eee",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          Vite
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            background: "#eee",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          Next.js
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            background: "#eee",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          TypeScript
        </span>
      </p>
    </aside>
  );
}
