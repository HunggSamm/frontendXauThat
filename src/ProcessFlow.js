import React, { useState, useEffect, useRef } from "react";
import LeaderLine from "react-leader-line";
import "./ProcessFlow.scss";

const ProcessFlow = () => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const lineRefs = useRef([]);
  const [items, setItems] = useState(
    Array.from({ length: 24 }, (_, i) => i + 1)
  );

  const drawLines = () => {
    lineRefs.current.forEach((line) => line?.remove());
    lineRefs.current = [];

    const elems = containerRef.current.querySelectorAll(".item");
    const nTotal = elems.length;

    const itemStyle = window.getComputedStyle(itemRef.current);
    const itemWidth =
      itemRef.current.offsetWidth +
      parseInt(itemStyle.marginLeft) +
      parseInt(itemStyle.marginRight);

    const containerStyle = window.getComputedStyle(containerRef.current);
    const containerWidth = containerRef.current.offsetWidth;
    const containerPadding =
      parseInt(containerStyle.paddingLeft) +
      parseInt(containerStyle.paddingRight);

    const numCols = Math.min(
      Math.floor((containerWidth - containerPadding) / itemWidth),
      nTotal
    );

    for (let i = 0; i < nTotal - 1; i++) {
      const row1 = Math.floor(i / numCols);
      const row2 = Math.floor((i + 1) / numCols);

      let options = {
        color: "black",
        path: "straight",
        endPlug: "arrow3",
        startPlug: "disc",
      };

      const isEndOfRow = (i + 1) % numCols === 0 || i === nTotal - 1;

      if (row1 !== row2) {
        if (row1 % 2 === 0) {
          options = {
            color: "black",
            path: "fluid",
            startSocket: "right",
            endSocket: "right",
            startSocketGravity: [100, 0],
            endSocketGravity: [100, 0],
          };
        } else {
          options = {
            color: "black",
            path: "fluid",
            startSocket: "left",
            endSocket: "left",
            startSocketGravity: [-100, 0],
            endSocketGravity: [-100, 0],
          };
        }
      }

      const line = new LeaderLine(elems[i], elems[i + 1], options);
      lineRefs.current.push(line);
    }
  };

  const adjustLayout = () => {
    if (!containerRef.current || !itemRef.current) return;

    const elems = containerRef.current.querySelectorAll(".item");
    const nTotal = elems.length;

    const itemStyle = window.getComputedStyle(itemRef.current);
    const itemWidth =
      itemRef.current.offsetWidth +
      parseInt(itemStyle.marginLeft) +
      parseInt(itemStyle.marginRight);

    const containerStyle = window.getComputedStyle(containerRef.current);
    const containerWidth = containerRef.current.offsetWidth;
    const containerPadding =
      parseInt(containerStyle.paddingLeft) +
      parseInt(containerStyle.paddingRight);

    const numCols = Math.min(
      Math.floor((containerWidth - containerPadding) / itemWidth),
      nTotal
    );
    const numRows = Math.ceil(nTotal / numCols);

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = col + row * numCols;
        if (index >= nTotal) break;

        const elem = elems[index];
        const startIndexOfRow = row * numCols;
        const endIndexOfRow = Math.min((row + 1) * numCols, nTotal) - 1;

        elem.style.border = "none";

        // if (index === startIndexOfRow) {
        //   elem.style.border = "2px solid green";
        // }
        // if (index === endIndexOfRow) {
        //   elem.style.border = "2px solid red";
        // }

        elem.style.marginLeft = "10px";

        if (row % 2 === 0) {
          elem.style.order = index;
        } else {
          elem.style.order = numCols - col - 1 + row * numCols;

          if (
            row === numRows - 1 &&
            index === nTotal - 1 &&
            col < numCols - 1
          ) {
            elem.style.marginLeft =
              (numCols * numRows - nTotal) * itemWidth + 10 + "px";
          }
        }
      }
    }

    setTimeout(drawLines, 200);
  };

  useEffect(() => {
    adjustLayout();

    const handleResize = () => adjustLayout();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lineRefs.current.forEach((line) => line?.remove());
    };
  }, [items]);

  return (
    <div className="alternating-container">
      <div ref={containerRef} className="grid-container">
        {items.map((num, index) => (
          <div key={num} ref={index === 0 ? itemRef : null} className="item">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
