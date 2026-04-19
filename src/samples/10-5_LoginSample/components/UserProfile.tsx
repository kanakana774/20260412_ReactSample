import { useAuth } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div style={{ padding: "10px", background: "#e0f7fa" }}>
      <p>
        ようこそ、<strong>{user.name}</strong> さん！
      </p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default UserProfile;
