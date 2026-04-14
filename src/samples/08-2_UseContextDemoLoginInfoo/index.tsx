import { useAuth } from "./useAuth";
import { AuthProvider } from "./AuthProvider";

// --- 5. コンポーネントたち（深い階層をシミュレーション） ---
// 孫コンポーネント: 直接 AuthContext から情報を取る
const UserInfo = () => {
  const { user, logout } = useAuth(); // Propsリレーなしで取得！
  console.log("%c[Render] UserInfo (孫)", "color: #9999ff");

  if (!user) return <p>ログインしていません</p>;

  return (
    <div style={{ border: "2px solid #9999ff", padding: "10px" }}>
      <p>
        現在のユーザー: {user.name} ({user.email})
      </p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

// 子コンポーネント: Propsとして何も受け取らないし、渡さない
const Header = () => {
  console.log("%c[Render] Header (子)", "color: #99ff99");
  return (
    <header
      style={{
        border: "2px solid #99ff99",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>共通ヘッダー</h3>
      <UserInfo /> {/* Propsを渡していないことに注目！ */}
    </header>
  );
};

// 親コンポーネント
export default function ContextDemo() {
  return (
    <AuthProvider>
      <div style={{ padding: "20px", border: "2px solid #ff9999" }}>
        <h1>App (親)</h1>
        <LoginController />
        <hr />
        <Header />
      </div>
    </AuthProvider>
  );
}

// ログインボタンだけのコンポーネント
const LoginController = () => {
  const { user, login } = useAuth();
  if (user) return null;
  return <button onClick={login}>テストユーザーでログイン</button>;
};
