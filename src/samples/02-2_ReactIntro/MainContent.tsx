const styles: { [key: string]: React.CSSProperties } = {
  main: { flex: 2 },
  article: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  section: { marginBottom: "40px" },
  codeBlock: {
    backgroundColor: "#282c34",
    color: "#abb2bf",
    padding: "15px",
    borderRadius: "5px",
    display: "block",
    overflowX: "auto",
  },
  summary: { fontWeight: "bold", cursor: "pointer", padding: "10px 0" },
};

export function MainContent() {
  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <section style={styles.section}>
          <h2>1. コンポーネントベース</h2>
          <p>
            自分自身で状態を管理するカプセル化されたコンポーネントを組み合わせることで、複雑なUIを構築します。
          </p>
          <code style={styles.codeBlock}>
            {`function Welcome() {\n  return <h1>Hello, React!</h1>;\n}`}
          </code>
        </section>

        <section style={styles.section}>
          <h2>2. 宣言的な UI</h2>
          <p>
            React
            は、データの変化に応じて適切なコンポーネントだけを効率的に更新、描画します。
          </p>
          <details>
            <summary style={styles.summary}>
              詳細を見る（仮想DOMについて）
            </summary>
            <p>
              Reactは仮想DOMを使用して、実際のDOM操作を最小限に抑え、パフォーマンスを最適化します。
            </p>
          </details>
        </section>

        <section style={styles.section}>
          <h2>3. 学習のポイント</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{ textAlign: "left", borderBottom: "2px solid #61dafb" }}
              >
                <th>トピック</th>
                <th>重要度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JSX</td>
                <td>高</td>
              </tr>
              <tr>
                <td>Props/State</td>
                <td>最高</td>
              </tr>
              <tr>
                <td>Hooks</td>
                <td>最高</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}
