import Inline from "./1_Inline";
import ObjectStyle from "./2_Object";
import PlainCss from "./3_PlainCss";

export default function CssComparison() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2>CSS適用の比較</h2>
      <Inline />
      <ObjectStyle />
      <PlainCss />
    </div>
  );
}
