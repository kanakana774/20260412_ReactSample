export default function MainContent() {
  return (
    <main style={{ flex: 3, minWidth: "300px" }}>
      {/* 記事 */}
      <article>
        <header>
          <h2>HTMLセマンティクスの重要性</h2>
          <p>
            投稿日: <time dateTime="2026-01-01">2026年01月01日</time>
          </p>
        </header>

        <section>
          <h3>なぜ適切なタグを使うのか？</h3>
          <p>
            Reactでも、単なる<code>&lt;div&gt;</code>の羅列ではなく、
            <strong>意味のあるタグ</strong>
            を使うことで、アクセシビリティやSEOが向上します。
          </p>
          <blockquote>「コードは人間が読むためのものです。」</blockquote>
        </section>

        {/* 図表の例 */}
        <figure
          style={{
            margin: "20px 0",
            border: "1px solid #eee",
            padding: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#3498db",
            }}
          ></div>
          <figcaption>図1: セマンティックな構造のイメージ</figcaption>
        </figure>

        {/* テーブル */}
        <section>
          <h3>学習ロードマップ</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  段階
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  STEP 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  静的なコンポーネント分割
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  STEP 2
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Propsによるデータの受け渡し
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 説明リストの例 */}
        <section>
          <h3>用語解説</h3>
          <dl>
            <dt>
              <strong>JSX</strong>
            </dt>
            <dd>JavaScriptの中でHTMLのように書ける構文のこと。</dd>
            <dt>
              <strong>Component</strong>
            </dt>
            <dd>UIを構成する再利用可能な部品のこと。</dd>
          </dl>
        </section>
      </article>
    </main>
  );
}
