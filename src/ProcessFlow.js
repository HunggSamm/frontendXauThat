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
    const elements = itemRefs.current.filter((el) => el);

    if (!container || !svg || elements.length === 0) return;

    svg.innerHTML = `
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#374151" />
        </marker>
        <marker id="disc" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <circle cx="4" cy="4" r="3" fill="#374151" />
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
        centerX: rect.left + rect.width / 2 - containerRect.left,
        centerY: rect.top + rect.height / 2 - containerRect.top,
      };
    });

    const containerStyles = window.getComputedStyle(container);
    const containerWidth =
      container.offsetWidth -
      parseInt(containerStyles.paddingLeft) -
      parseInt(containerStyles.paddingRight);

    const firstItem = elements[0];
    const itemStyles = window.getComputedStyle(firstItem);
    const itemWidth =
      firstItem.offsetWidth +
      parseInt(itemStyles.marginLeft) +
      parseInt(itemStyles.marginRight);

    const numCols = Math.floor(containerWidth / itemWidth);

    for (let i = 0; i < positions.length - 1; i++) {
      const start = positions[i];
      const end = positions[i + 1];

      const currentRow = Math.floor(i / numCols);
      const nextRow = Math.floor((i + 1) / numCols);
      const isRowChange = currentRow !== nextRow;

      if (isRowChange) {
        const isEvenRow = currentRow % 2 === 0;
        const controlOffset = 50;

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        let d;

        if (isEvenRow) {
          d = `M ${start.right},${start.centerY}
               C ${start.right + controlOffset},${start.centerY},
                 ${start.right + controlOffset},${end.centerY},
                 ${end.right},${end.centerY}`;
        } else {
          d = `M ${start.left},${start.centerY}
               C ${start.left - controlOffset},${start.centerY},
                 ${start.left - controlOffset},${end.centerY},
                 ${end.left},${end.centerY}`;
        }

        path.setAttribute("d", d);
        path.setAttribute("stroke", "#374151");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");

        svg.appendChild(path);
      } else {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", start.right);
        line.setAttribute("y1", start.centerY);
        line.setAttribute("x2", end.left);
        line.setAttribute("y2", end.centerY);
        line.setAttribute("stroke", "#374151");
        line.setAttribute("stroke-width", "2");

        svg.appendChild(line);
      }
    }
  };

  const adjustLayout = () => {
    const container = containerRef.current;
    const elements = itemRefs.current.filter((el) => el);

    if (!container || elements.length === 0) return;

    const containerStyles = window.getComputedStyle(container);
    const containerWidth =
      container.offsetWidth -
      parseInt(containerStyles.paddingLeft) -
      parseInt(containerStyles.paddingRight);

    const firstItem = elements[0];
    const itemStyles = window.getComputedStyle(firstItem);
    const itemWidth =
      firstItem.offsetWidth +
      parseInt(itemStyles.marginLeft) +
      parseInt(itemStyles.marginRight);

    const numCols = Math.min(
      Math.floor(containerWidth / itemWidth),
      items.length
    );
    const numRows = Math.ceil(items.length / numCols);

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = col + row * numCols;
        if (index >= items.length) break;

        const el = elements[index];

        if (row % 2 === 0) {
          el.style.order = index;
        } else {
          el.style.order = numCols - col - 1 + row * numCols;

          if (
            row === numRows - 1 &&
            index === items.length - 1 &&
            col < numCols - 1
          ) {
            const extraMargin = (numCols * numRows - items.length) * itemWidth;
            el.style.marginLeft = `${extraMargin + 10}px`;
          }
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
