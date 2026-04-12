import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function StaticSemantics() {
  return (
    <div
      style={{
        color: "#333",
        lineHeight: 1.6,
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
