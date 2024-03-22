"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full",
      "bg-neutral-600 dark:bg-neutral-800", // Adjust dark mode background
      "ring-2 ring-primary/50 dark:ring-secondary/50 ring-opacity-20", // Ring effect
      "shadow-lg", // Shadow for depth
      "transition-all ease-out duration-300", // Smooth transition for the container
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-gradient-to-r from-primary to-accent animate-pulse" // Gradient from primary to accent colors
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`, // Directly use value for width instead of translating X
        transition: 'width 0.5s ease-out, background-color 0.5s ease-out', // Smooth width transition and background color
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.25)' // Inner shadow for added depth
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = "Progress"

export { Progress }
