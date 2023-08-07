import React from "react";
import styles from "./bar.module.css";

type BarDateHandleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  barCornerRadius: number;
  onMouseDown: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
  className?: string;
};
export const BarDateHandle: React.FC<BarDateHandleProps> = ({
  x,
  y,
  width,
  height,
  barCornerRadius,
  onMouseDown,
  className,
}) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      className={className ? `${styles.barHandle} ${className}` : styles.barHandle}
      ry={barCornerRadius}
      rx={barCornerRadius}
      onMouseDown={onMouseDown}
      onClick={(e) => e.stopPropagation()}
    />
  );
};
