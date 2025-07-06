import React, { useEffect, useRef, useState } from "react";
import "./ProcessFlow.scss";

function ProcessFlow() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const svgRef = useRef(null);
  const [items] = useState(Array.from({ length: 24 }, (_, i) => i + 1));

  const drawLines = () => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const elements = itemRefs.current;

    if (!container || !svg || elements.length === 0) return;

    svg.innerHTML = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="black" />
      </marker>
    </defs>
  `;

    const containerRect = container.getBoundingClientRect();
    const positions = elements.map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left - containerRect.left,
        right: rect.right - containerRect.left,
        top: rect.top - containerRect.top,
        bottom: rect.bottom - containerRect.top,
        centerY: rect.top + rect.height / 2 - containerRect.top,
      };
    });

    const containerWidth = container.offsetWidth;
    const item = elements[0];
    const itemStyle = window.getComputedStyle(item);
    const itemWidth =
      item.offsetWidth +
      parseInt(itemStyle.marginLeft) +
      parseInt(itemStyle.marginRight);
    const numCols = Math.floor(containerWidth / itemWidth) || 1;

    for (let i = 0; i < positions.length - 1; i++) {
      const start = positions[i];
      const end = positions[i + 1];

      const isEndOfRow = (i + 1) % numCols === 0;
      const color = "gray";

      if (isEndOfRow) {
        // Vẽ đường cong khi chuyển hàng
        const row = Math.floor(i / numCols);
        const isEvenRow = row % 2 === 0;

        const controlOffsetX = 40;
        const controlOffsetY = 40;

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        let d;

        if (isEvenRow) {
          // từ lề phải ô cuối sang lề phải ô đầu hàng tiếp theo
          d = `M ${start.right},${start.centerY}
     C ${start.right + controlOffsetX},${start.centerY + controlOffsetY},
       ${end.right + controlOffsetX},${end.centerY - controlOffsetY},
       ${end.right},${end.centerY}`;
        } else {
          // từ lề trái ô cuối sang lề trái ô đầu hàng tiếp theo
          d = `M ${start.left},${start.centerY}
     C ${start.left - controlOffsetX},${start.centerY + controlOffsetY},
       ${end.left - controlOffsetX},${end.centerY - controlOffsetY},
       ${end.left},${end.centerY}`;
        }

        path.setAttribute("d", d);
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        svg.appendChild(path);
      } else {
        // Vẽ đường thẳng nối cùng hàng
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", start.right);
        line.setAttribute("y1", start.centerY);
        line.setAttribute("x2", end.left);
        line.setAttribute("y2", end.centerY);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "2");

        svg.appendChild(line);
      }
    }
  };

  const adjustLayout = () => {
    const container = containerRef.current;
    const elements = itemRefs.current;

    if (!container || elements.length === 0) return;

    const containerWidth = container.offsetWidth;
    const item = elements[0];
    const itemStyle = window.getComputedStyle(item);
    const itemWidth =
      item.offsetWidth +
      parseInt(itemStyle.marginLeft) +
      parseInt(itemStyle.marginRight);

    const numCols = Math.floor(containerWidth / itemWidth) || 1;
    const numRows = Math.ceil(items.length / numCols);

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = row * numCols + col;
        if (index >= items.length) continue;

        const el = elements[index];
        if (row % 2 === 0) {
          el.style.order = index;
        } else {
          el.style.order = row * numCols + (numCols - col - 1);
        }
      }
    }

    drawLines();
  };

  useEffect(() => {
    const handleResize = () => {
      adjustLayout();
    };

    const timeout = setTimeout(() => {
      adjustLayout();
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="process-container">
      <div ref={containerRef} className="grid-container">
        <svg ref={svgRef} className="svg-overlay"></svg>

        {items.map((num, index) => (
          <div
            key={num}
            ref={(el) => (itemRefs.current[index] = el)}
            className="grid-item"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessFlow;
