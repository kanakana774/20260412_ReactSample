import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2c3e50",
    backgroundColor: "#f4f7f6",
  },
  layout: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    gap: "30px",
  },
};

export default function ReactIntro() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.layout}>
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
