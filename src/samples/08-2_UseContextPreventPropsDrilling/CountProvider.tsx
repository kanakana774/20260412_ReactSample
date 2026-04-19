import { useState, type ReactNode, useMemo } from "react";
import { CountContext } from "./countContext";

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  // valueはメモ化しておく
  const value = useMemo(() => ({ count, increment }), [count]);

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};
