import { type CSSProperties } from "react";
import { MemberCard, type MemberCardProps } from "./MemberCard";

// --- スタイル定義 (ObjectStyle) ---
const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f6f8fa",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#24292e",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

const MEMBER_DATA: MemberCardProps[] = [
  { name: "鈴木", role: "Beginner", level: 1, isOnline: true },
  { name: "佐藤", role: "Master", level: 5, isOnline: false },
  { name: "田中", role: "Beginner", level: 2, isOnline: true },
];

export default function PropsBasic() {
  return (
    <section style={styles.container}>
      <header>
        <h2 style={styles.title}>メンバー</h2>
      </header>

      <div style={styles.list}>
        {/* ※1 オブジェクトをバラさず渡す方がより簡潔 */}
        {MEMBER_DATA.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
