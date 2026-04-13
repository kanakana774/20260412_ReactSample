import { Link, Outlet, useLocation } from "react-router-dom";
import type { Sample } from "../App";

interface LayoutProps {
  samples: Sample[];
}

export const Layout = ({ samples }: LayoutProps) => {
  const location = useLocation();

  return (
    <div
      style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      {/* サイドバー */}
      <nav
        style={{
          width: "280px",
          background: "#1a1a1a",
          color: "#fff",
          padding: "1.5rem",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",

          // navbarをスクロールに変更
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
          top: 0,
        }}
      >
        <h2
          style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#646cff" }}
        >
          React Samples
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {samples.map((s) => {
            const fullPath = `/samples/${s.path}`;
            const isActive = location.pathname === fullPath;

            return (
              <li key={s.path} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={fullPath}
                  style={{
                    color: isActive ? "#fff" : "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "block",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    background: isActive ? "#333" : "transparent",
                    transition: "0.2s",
                  }}
                >
                  {/* 表示用のタイトル整形: "01_Todo_App" -> "01 Todo App" */}
                  {s.title.replace(/_/g, " ")}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #444",
            paddingTop: "1rem",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#aaa",
              fontSize: "0.8rem",
              textDecoration: "none",
            }}
          >
            ← Home
          </Link>
        </div>
      </nav>

      {/* メイン画面 */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          background: "#f9f9f9",

          // navbarをスクロールにしたため変更
          marginLeft: "280px",
        }}
      >
        <div
          style={{
            // maxWidth: "1000px",
            margin: "0 auto",
            padding: "2rem",
            background: "#fff",
            minHeight: "100vh",
            boxShadow: "0 0 20px rgba(0,0,0,0.05)",
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};
