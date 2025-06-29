import React, { useState, useEffect } from "react";
import Xarrow from "react-xarrows";

export default function ProcessFlow() {
  const steps = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"];

  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(getItemsPerRow());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getItemsPerRow() {
    const width = window.innerWidth;
    if (width < 600) return 2;
    if (width < 900) return 3;
    return 4;
  }

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    padding: 20,
    boxSizing: "border-box",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    margin: "20px 0",
    width: "100%",
  };

  const reverseRowStyle = {
    ...rowStyle,
    flexDirection: "row-reverse",
  };

  const stepStyle = {
    flex: "1 1 0",
    minWidth: 120,
    height: 100,
    background: "#eee",
    border: "2px solid #333",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxSizing: "border-box",
  };

  // Tách nhóm theo hàng + xử lý ziczac
  const rows = [];
  for (let i = 0; i < steps.length; i += itemsPerRow) {
    const group = steps.slice(i, i + itemsPerRow);
    const isReverse = Math.floor(i / itemsPerRow) % 2 !== 0;
    rows.push(isReverse ? group.reverse() : group);
  }

  // Dùng mảng lưu lại thứ tự ID thực tế trên màn hình
  const visibleOrder = [];
  rows.forEach((row, rowIndex) => {
    row.forEach((step, index) => {
      visibleOrder.push({
        label: step,
        globalIndex: rowIndex * itemsPerRow + (Math.floor(rowIndex % 2) === 0 ? index : row.length - 1 - index),
      });
    });
  });

  return (
    <div style={containerStyle}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={rowIndex % 2 === 0 ? rowStyle : reverseRowStyle}
        >
          {row.map((step, index) => {
            const trueIndex = rowIndex * itemsPerRow + (rowIndex % 2 === 0 ? index : row.length - 1 - index);
            return (
              <div key={trueIndex} id={`step-${trueIndex}`} style={stepStyle}>
                {step}
              </div>
            );
          })}
        </div>
      ))}

      {/* Vẽ mũi tên nối đúng theo thứ tự hiển thị thực tế */}
      {visibleOrder.map((item, idx) =>
        idx < visibleOrder.length - 1 ? (
          <Xarrow
            key={idx}
            start={`step-${item.globalIndex}`}
            end={`step-${visibleOrder[idx + 1].globalIndex}`}
            strokeWidth={2}
            color="black"
            path="smooth"
          />
        ) : null
      )}
    </div>
  );
}
