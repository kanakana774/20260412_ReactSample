import { useState, type ReactNode } from "react";
import { AuthContext } from "./useAuth";

// --- 1. 型の定義 ---
export type User = {
  name: string;
  email: string;
} | null;

// --- 3. Provider コンポーネント ---
// これで囲んだ範囲内でデータが共有される
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = () => {
    console.log(
      "%c[Auth] ログインしました",
      "color: #4CAF50; font-weight: bold;",
    );
    setUser({ name: "たろう", email: "taro@example.com" });
  };

  const logout = () => {
    console.log(
      "%c[Auth] ログアウトしました",
      "color: #f44336; font-weight: bold;",
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
