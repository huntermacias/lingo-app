"use client";

import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import "react-circular-progressbar/dist/styles.css";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

const colorPalette = [
  { bg: "#FFC107", stroke: "#FF9800" }, // Amber
  { bg: "#4CAF50", stroke: "#388E3C" }, // Green
  { bg: "#2196F3", stroke: "#1976D2" }, // Blue
  { bg: "#9C27B0", stroke: "#7B1FA2" }, // Purple
  { bg: "#FF5722", stroke: "#E64A19" }, // Deep Orange
  { bg: "#03A9F4", stroke: "#0288D1" }, // Light Blue
  { bg: "#E91E63", stroke: "#C2185B" }, // Pink
  { bg: "#00BCD4", stroke: "#0097A7" }  // Cyan
];

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage
}: Props) => {
  const cycleIndex = index % colorPalette.length;
  const { bg, stroke } = colorPalette[cycleIndex];

  // Adjusted to use CSS variables based on the theme
  let backgroundColor = 'dark' ? 'var(--lesson-bg-dark)' : 'var(--lesson-bg-light)';
  let textColor = 'dark' ? 'var(--lesson-text-dark)' : 'var(--lesson-text-light)';
  let borderColor = 'dark' ? 'var(--lesson-border-dark)' : 'var(--lesson-border-light)';




  let indentationLevel;

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }

  const rightPosition = indentationLevel * 50;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";
  // Determine button style based on the lesson state
  let buttonStyle = {};


  if (locked) {
    backgroundColor = bg;
    buttonStyle = { backgroundColor: bg, borderColor: bg }; // Locked state style

    borderColor = bg;
  } else if (isCompleted) {
    buttonStyle = { backgroundColor: bg, borderColor: stroke, boxShadow: '0 0 10px ' + stroke }; // Completed state style

    backgroundColor = bg;
    borderColor = stroke;
  } else {
    buttonStyle = { backgroundColor: bg, borderColor: stroke };

  }

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[142px] w-[142px] relative">
            <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
              Start
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
              />
            </div>
          
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#4ade80",
                },
                trail: {
                  stroke: "#7e55e8",
                },
              }}
            >

              <button
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: '4px solid',
                  ...buttonStyle, // Spread the buttonStyle object to apply its styles
                }}
                className="flex justify-center items-center"
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    locked ? "text-neutral-400" : "text-white"
                  )}
                />

              </button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          
          <button
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor,
              color: textColor,
              borderColor,
              borderWidth: '4px',
              ...(isCompleted && { boxShadow: `0 0 10px ${stroke}` }),
            }}
            className="flex items-center justify-center"
          >
            <Icon className={`h-10 w-10 ${locked ? "text-blue-500" : "text-primary-foreground"}`} />

          </button>
          
        )}
      </div>
    </Link>
  );
};