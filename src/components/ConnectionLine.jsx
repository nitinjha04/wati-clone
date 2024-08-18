import React from "react";
import { useConnection } from "@xyflow/react";

export default ({ fromX, fromY, toX, toY }) => {
  const { fromHandle } = useConnection();
  const getStrokeColor = (fromHandle) => {
    switch (true) {
      case fromHandle.id.includes("red"):
        return "red";
      case fromHandle.id.includes("green"):
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <g>
      <path
        fill="none"
        stroke={getStrokeColor(fromHandle)}
        strokeWidth={1.5}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke={getStrokeColor(fromHandle)}
        strokeWidth={1.5}
      />
    </g>
  );
};
