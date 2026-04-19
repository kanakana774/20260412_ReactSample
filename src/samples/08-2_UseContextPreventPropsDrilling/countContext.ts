import { createContext, useContext } from "react";

export const CountContext = createContext<
  { count: number; increment: () => void } | undefined
>(undefined);

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within CountProvider");
  return context;
};
