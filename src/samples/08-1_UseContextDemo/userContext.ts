import { createContext } from "react";

// 1. コンテキストを作る
// 引数には初期値（Providerが見つからない時の値）を入れます
export const UserContext = createContext("ゲスト");
