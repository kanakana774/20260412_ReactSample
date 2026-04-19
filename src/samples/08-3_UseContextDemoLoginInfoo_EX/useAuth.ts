import { createContext, useContext } from "react";
import type { User } from "./AuthProvider";

type AuthContextType = {
  user: User;
  login: () => void;
  logout: () => void;
};

// --- 2. Contextの作成 ---
// 初期値は undefined にしておき、Provider 以外で使った時にエラーを出せるようにするのが定石です
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// --- 4. 使うためのカスタムフック ---
// 毎回 useContext(AuthContext) と書くのは面倒だし、undefined チェックもしたいのでフック化します
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
