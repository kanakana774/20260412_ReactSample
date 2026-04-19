import { type CSSProperties } from "react";
import { MemberCard, type MemberCardProps } from "./MemberCard";

// --- スタイル定義 (ObjectStyle) ---
const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f6f8fa",
    height: "100%",
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

// 表示するデータのリスト
// ※1 子コンポーネント側の型の再利用
const MEMBER_DATA: MemberCardProps[] = [
  { name: "鈴木", role: "Beginner", level: 1, isOnline: true },
  { name: "佐藤", role: "Master", level: 5, isOnline: false },
  { name: "田中", role: "Beginner", level: 2, isOnline: true },
];

export default function PropsBasic() {
  return (
    <>
      <section style={styles.container}>
        <header>
          <h2 style={styles.title}>メンバー</h2>
        </header>

        <div style={styles.list}>
          {/* ※2 jsx内でtsを使う際は波括弧でくくる */}
          {/* ※2 jsx内の波括弧では「文」が使えない！ */}
          {/* ※2 mapで配列を回して表示するやり方は頻出 */}
          {MEMBER_DATA.map((member) => (
            <MemberCard
              key={member.name} // ※3 keyを忘れないように！
              name={member.name}
              role={member.role}
              level={member.level}
              isOnline={member.isOnline}

              // key={member.name} // ※4 プロパティ名が同じならスプレッド構文で指定することも可
              // {...member}
            />
          ))}
        </div>
      </section>
      <section style={styles.container}>
        <h3>参考：</h3>
        <a href="https://jsprimer.net/basic/statement-expression/">式と文</a>
      </section>
    </>
  );
}
