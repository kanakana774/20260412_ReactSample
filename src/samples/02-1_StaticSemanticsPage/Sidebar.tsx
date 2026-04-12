export default function Sidebar() {
  return (
    <aside
      style={{
        flex: 1,
        minWidth: "200px",
        backgroundColor: "#eee",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>著者情報</h3>
      <p>React勉強中の人</p>

      <h3>関連リンク</h3>
      <ol>
        <li>
          <a href="https://react.dev">React公式ドキュメント</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org">MDN Web Docs</a>
        </li>
      </ol>

      <h3>タグクラウド</h3>
      <p>
        <small
          style={{
            fontSize: "0.8rem",
            background: "#fff8dc",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          React
        </small>
        <small
          style={{
            fontSize: "0.8rem",
            background: "#fff8dc",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          TypeScript
        </small>
        <small
          style={{
            fontSize: "0.8rem",
            background: "#fff8dc",
            padding: "3px 8px",
            margin: "2px",
            display: "inline-block",
          }}
        >
          HTML
        </small>
      </p>
    </aside>
  );
}
