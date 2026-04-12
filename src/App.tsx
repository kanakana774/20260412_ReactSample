import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

// サンプルの型定義
export interface Sample {
  path: string;
  title: string;
  Component: React.ComponentType;
}

// samplesフォルダ内のファイルを一括取得
// 1. 直下の .tsx ファイル
// 2. 1階層下のフォルダ内にある index.tsx または Index.tsx
const sampleFiles = import.meta.glob<{ default: React.ComponentType }>(
  ["./samples/*.tsx", "./samples/*/[iI]ndex.tsx"],
  { eager: true },
);

const samples: Sample[] = Object.keys(sampleFiles)
  .sort() // アルファベット順（または番号順）に並べ替え
  .map((path) => {
    // パスを整形して「名前」を取り出す
    // 例: "./samples/01_TodoApp/index.tsx" -> "01_TodoApp"
    // 例: "./samples/Home.tsx" -> "Home"
    const name = path
      .replace("./samples/", "")
      .replace(/\/(index)\.tsx$/, "")
      .replace(/\.tsx$/, "");

    return {
      path: name.toLowerCase(),
      title: name,
      Component: sampleFiles[path].default,
    };
  });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout samples={samples} />}>
          <Route
            index
            element={
              <div style={{ padding: "2rem" }}>
                <h2>React Study Dashboard</h2>
              </div>
            }
          />
          {samples.map((s) => (
            <Route
              key={s.path}
              path={`samples/${s.path}`}
              element={<s.Component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
