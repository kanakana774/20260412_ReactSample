import { Counter } from "./Counter";
import { Toggle } from "./Toggle";
import { TextInput } from "./TextInput";

export default function UseStateBasic() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>useState の基本</h2>
      <p>State（状態）が変わると、Reactが自動的に画面を更新します。</p>

      <Counter />
      <Toggle />
      <TextInput />

      <section>
        <h3>参考：</h3>
        <ul>
          <li>
            <a href="https://ja.react.dev/learn/render-and-commit">
              トリガー、レンダー、コミットの流れを説明
            </a>
          </li>
          <li>
            <a href="https://ja.react.dev/learn/choosing-the-state-structure">
              何をstateで管理すると良いかのページ
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Values/named-color">
              consoleに文字色付けるときは用に
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
