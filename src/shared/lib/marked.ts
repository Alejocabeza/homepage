import { marked } from "marked";

const renderer = new marked.Renderer();

renderer.html = ({ text }: any) => {
  return typeof text === "string" ? text : String(text ?? "");
};

renderer.codespan = ({ text }: any) => {
  const safe = typeof text === "string" ? text : String(text ?? "");
  return "<code>" + safe + "</code>";
};

renderer.code = ({ text, lang, escaped }: any) => {
  const safeCode = typeof text === "string" ? text : String(text ?? "");

  if (
    lang &&
    typeof lang === "string" &&
    lang.toLowerCase().includes("mermaid")
  ) {
    return `<div class="mermaid">${safeCode}</div>`;
  }

  return `<pre><code class="language-${
    lang || "plaintext"
  }">${safeCode}</code></pre>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: renderer,
});

export default marked;
