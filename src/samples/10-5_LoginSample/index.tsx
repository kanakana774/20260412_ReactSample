import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";
import { useAuth } from "./contexts/AuthContext";
import AuthProvider from "./contexts/AuthProvider";

const AppContent = () => {
  const { user } = useAuth();

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>セッション管理サンプル</h1>
      {user ? <UserProfile /> : <LoginForm />}

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#888" }}>
        ※ログインしてリロードしても、名前が残ります。
      </p>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
