import {
  useState,
  useEffect,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";
import { AuthContext, type User } from "./AuthContext";

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("session_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("session_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("session_user");
    }
  }, [user]);

  // 1. 関数を useCallback で固定する
  // これをしないと、関数の「参照」が毎回変わってしまいます
  const login = useCallback((name: string) => {
    setUser({ name });
  }, []); // setUserは安定しているので空配列でOK

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  // 2. Providerに渡すオブジェクトを useMemo で固定する
  // user, login, logout のいずれかが変わった時だけ、新しいオブジェクトを作る
  const authValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return (
    // 3. 固定された値を渡す
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
