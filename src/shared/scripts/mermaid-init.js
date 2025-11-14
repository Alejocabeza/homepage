document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { default: mermaid } = await import(
      "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"
    );

    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        background: "#0a192f",
        primaryColor: "#0a192f",
        primaryTextColor: "#ccd6f6",
        primaryBorderColor: "#64ffda",
        secondaryColor: "#0f2746",
        secondaryTextColor: "#ccd6f6",
        secondaryBorderColor: "#64ffda",
        tertiaryColor: "#112a54",
        tertiaryTextColor: "#64ffda",
        textColor: "#ccd6f6",
        mainBkg: "#0a192f",
        lineColor: "#64ffda",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "16px",
        fontWeight: "600",
        clusterBkg: "#0f2746",
        clusterBorder: "#64ffda",
        edgeLabelBackground: "#020c1b",
      },
      flowchart: {
        curve: "basis",
        htmlLabels: true,
        padding: 16,
        useMaxWidth: true,
      },
    });

    const applyHighContrastStyles = (svgElement) => {
      if (!svgElement) return;

      svgElement.style.maxWidth = "100%";
      svgElement.style.height = "auto";
      svgElement.setAttribute("font-family", "Inter, system-ui, sans-serif");
      svgElement.setAttribute("font-size", "16px");
      svgElement
        .querySelectorAll(".node rect, .node polygon, .node path")
        .forEach((shape) => {
          shape.setAttribute("fill", "#0a192f");
          shape.setAttribute("stroke", "#64ffda");
          shape.setAttribute("stroke-width", "1.5");
        });

      svgElement.querySelectorAll(".node text, text").forEach((textEl) => {
        textEl.setAttribute("fill", "#ccd6f6");
        textEl.setAttribute("font-weight", "600");
      });

      svgElement.querySelectorAll(".edgePath path").forEach((edge) => {
        edge.setAttribute("stroke", "#64ffda");
        edge.setAttribute("stroke-width", "1.5");
      });

      svgElement.querySelectorAll(".edgeLabel text").forEach((label) => {
        label.setAttribute("fill", "#64ffda");
        label.setAttribute("font-weight", "600");
      });

      svgElement.querySelectorAll("marker path").forEach((marker) => {
        marker.setAttribute("fill", "#64ffda");
        marker.setAttribute("stroke", "#64ffda");
      });

      svgElement.querySelectorAll(".cluster rect").forEach((cluster) => {
        cluster.setAttribute("fill", "#0f2746");
        cluster.setAttribute("stroke", "#64ffda");
        cluster.setAttribute("stroke-width", "1.5");
      });

      svgElement.querySelectorAll(".cluster text").forEach((clusterLabel) => {
        clusterLabel.setAttribute("fill", "#ccd6f6");
        clusterLabel.setAttribute("font-weight", "600");
      });

      const currentBg = svgElement.getAttribute("style") || "";
      svgElement.setAttribute(
        "style",
        `${currentBg};background-color:#0a192f;`
      );
    };

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
            svgContainer.style.backgroundColor = "#0a192f";
            svgContainer.style.padding = "20px";
            svgContainer.style.borderRadius = "12px";
            svgContainer.style.border = "1px solid rgba(100, 255, 218, 0.4)";
            svgContainer.style.boxShadow = "0 20px 45px rgba(10, 25, 47, 0.35)";
            svgContainer.style.overflowX = "auto";
            svgContainer.style.maxWidth = "100%";
            svgContainer.style.margin = "32px 0";

            const heading = element.previousElementSibling;
            if (heading && heading.tagName === "P") {
              heading.style.color = "#ccd6f6";
            }

            applyHighContrastStyles(svgContainer.querySelector("svg"));

            const parent = element.parentNode;
            if (parent) {
              parent.replaceChild(svgContainer, element);
            } else {
              element.outerHTML = svgContainer.outerHTML;
            }
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
