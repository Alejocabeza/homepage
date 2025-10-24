document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { default: mermaid } = await import(
      "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"
    );

    mermaid.initialize({
      startOnLoad: false,
      themeVariables: {
        background: "#ffffff",
      },
      theme: "default",
    });

    const mermaidBlocks = document.querySelectorAll(
      "pre code.language-mermaid"
    );
    const mermaidDivs = document.querySelectorAll("div.mermaid");

    const processBlock = async (element, index) => {
      try {
        const source = (element.textContent || "").trim();
        if (!source) return;
        const id = "mermaid-svg-" + Math.random().toString(36).slice(2, 11);

        try {
          const { svg, bindFunctions } = await mermaid.render(id, source);
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
        } catch (error) {
          console.error(`Error rendering mermaid block ${index}:`, error);
        }
      } catch (e) {
        console.error(`Error processing mermaid block ${index}:`, e);
      }
    };

    mermaidBlocks.forEach((block, index) => {
      const pre = block.parentNode;
      if (pre) processBlock(pre, index);
    });

    mermaidDivs.forEach((div, idx) => processBlock(div, `div-${idx}`));
  } catch (err) {
    console.error("Failed to load mermaid module:", err);
  }
});
