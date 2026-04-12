export default function Inline() {
  return (
    <div
      style={{
        // ※1 ただのjsonなので、ケバブケースではなく、キャメルケースに
        border: "2px solid #ff4757",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#ffeaea",
      }}
    >
      <h4 style={{ margin: 0, color: "#ff4757" }}>1. インライン直接</h4>
      <p>タグに直接 style={"{{ ... }}"} と書く方法です。</p>
    </div>
  );
}
