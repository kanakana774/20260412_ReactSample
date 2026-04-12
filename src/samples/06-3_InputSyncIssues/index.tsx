import { MissingValueBug } from "./MissingValueBug";
import { WarningTrigger } from "./WarningTrigger";

export default function InputSyncIssues() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>StateとInputの同期ミス</h2>
      <p>
        Stateを使っているつもりでも、<code>value</code>{" "}
        属性の設定を誤ると不具合が起きます。
      </p>

      <MissingValueBug />
      <WarningTrigger />

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          marginTop: "20px",
          borderLeft: "5px solid #333",
        }}
      >
        <h4>
          なぜ <code>value</code> が必要なのか？
        </h4>
        <ul>
          <li>
            <strong>単方向データフロー:</strong> <code>onChange</code> は「画面
            → State」の流れ。
          </li>
          <li>
            <strong>双方向の完成:</strong> <code>value={"{state}"}</code>{" "}
            は「State → 画面」の流れ。
          </li>
          <li>
            両方揃って初めて、プログラムから入力欄を操作（リセットや自動補完など）できるようになります。
          </li>
        </ul>
      </div>
    </div>
  );
}
