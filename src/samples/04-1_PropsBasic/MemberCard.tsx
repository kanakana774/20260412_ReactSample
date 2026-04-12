import { type CSSProperties } from "react";

// --- Propsの型定義 ---
// ※1 このコンポーネントを表示するには何が必要かという情報はその部品側に持たせておく（カプセル化）
export interface MemberCardProps {
  name: string;
  role: string;
  level: number;
  isOnline: boolean;
}

// --- スタイル定義 (ObjectStyle) ---
const styles: { [key: string]: CSSProperties } = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e1e4e8",
    borderRadius: "12px",
    padding: "1.5rem",
    width: "240px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.2s",
  },
  name: {
    margin: "0 0 0.5rem 0",
    fontSize: "1.25rem",
    color: "#1a1a1a",
  },
  role: {
    margin: "0 0 1rem 0",
    fontSize: "0.9rem",
    color: "#586069",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  info: {
    fontSize: "0.85rem",
    color: "#24292e",
  },
  statusIndicator: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "8px",
  },
};

export const MemberCard = ({
  name,
  role,
  level,
  isOnline,
}: MemberCardProps) => {
  return (
    <article style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.role}>{role}</p>

      <div style={styles.info}>
        <p>習熟度: Lv.{level}</p>
        <p>
          <span
            style={{
              ...styles.statusIndicator,
              backgroundColor: isOnline ? "#28a745" : "#d1d5da", // ※5 propsによって参考演算子で別のstyleに書き換え
            }}
          />
          {/* ※5 propsによって参考演算子で書き換え */}
          {isOnline ? "オンライン" : "オフライン"}
        </p>
      </div>
    </article>
  );
};
