import { createContext, useContext } from "react";

// 型定義
export interface User {
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}

// Contextの作成
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// カスタムフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
