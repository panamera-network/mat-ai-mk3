"use client";

import { useEffect, useState } from "react";

interface RingItemProps {
  label: string;
  value: string;     // eg. "+$120", "5%", "HIGH"
  color: string;     // stroke color
  size?: number;     // ring diameter
  percent?: number;  // 0 to 100 for progress
}

export default function RingItem({
  label,
  value,
  color,
  size = 100,
  percent = 75,
}: RingItemProps) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percent);
    }, 200);
    return () => clearTimeout(timeout);
  }, [percent]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center" style={{ width: size, height: size + 30 }}>
      <svg width={size} height={size}>
        <circle
          stroke="#2e2e3e"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="white"
          fontSize="16"
          fontWeight="bold"
        >
          {value}
        </text>
      </svg>
      <div className="text-white text-xs mt-2 text-center">{label}</div>
    </div>
  );
}
