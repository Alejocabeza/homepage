import mermaid from "mermaid";

document.addEventListener("DOMContentLoaded", () => {
  mermaid.initialize({
    startOnLoad: false,
    themeVariables: {
      background: "#ffffff",
    },
    theme: "default",
  });

  const mermaidBlocks = document.querySelectorAll("pre code.language-mermaid");
  const mermaidDivs = document.querySelectorAll("div.mermaid");

  const processBlock = (element, index) => {
    try {
      const source = element.textContent || "";
      const id = "mermaid-svg-" + Math.random().toString(36).substr(2, 9);

      mermaid
        .render(id, source)
        .then(({ svg, bindFunctions }) => {
          if (svg) {
            const svgContainer = document.createElement("div");
            svgContainer.innerHTML = svg;
            svgContainer.style.backgroundColor = "#ffffff";
            svgContainer.style.padding = "20px";
            svgContainer.style.borderRadius = "8px";

            element.outerHTML = svgContainer.outerHTML;
            if (bindFunctions) {
              bindFunctions();
            }
          } else {
            console.warn(
              `Mermaid render returned empty SVG for block ${index}`
            );
          }
        })
        .catch((error) => {
          console.error(`Error rendering mermaid block ${index}:`, error);
        });
    } catch (e) {
      console.error(`Error processing mermaid block ${index}:`, e);
    }
  };

  mermaidBlocks.forEach((block, index) => {
    const pre = block.parentNode;
    processBlock(pre, index);
  });

  mermaidDivs.forEach((div, idx) => processBlock(div, `div-${idx}`));
});
