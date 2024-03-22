"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className,
}: {
    text: string;
    revealText: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef<HTMLDivElement | any>(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
        // Ensure the calculation is relative to the component's dimensions and position.
        const componentRect = cardRef.current.getBoundingClientRect();
        const relativeX = event.clientX - componentRect.left; // Mouse position relative to component
        const percentage = (relativeX / componentRect.width) * 100;

        setWidthPercentage(percentage); // Update the state to adjust clip path accordingly
    }
    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            ref={cardRef}
            className={cn(
                "transition duration-300 ease-out transform hover:scale-105",
                "border w-[90%] md:w-[40rem] rounded-lg p-8 relative overflow-hidden",
                "bg-white dark:bg-[#1d1c20] border-white/[0.08] dark:border-gray-700",
                className
            )}
        >
            {children}
            <div className="relative flex items-center justify-center h-40">
                <motion.div
                    animate={{
                        opacity: widthPercentage > 0 ? 1 : 0,
                        // Updated to dynamically adjust the clip path based on mouse position
                        clipPath: `polygon(0 0, ${widthPercentage}% 0, ${widthPercentage}% 100%, 0 100%)`,
                    }}
                    transition={{ duration: isMouseOver ? 0 : 0.4 }}
                    className="absolute w-full h-full flex items-center justify-center bg-white dark:bg-[#1d1c20] z-20"
                    onHoverStart={(e) => e.preventDefault()} // Prevent default to ensure smooth hover interactions
                >
                    <p
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1d1c20] dark:text-white"
                    >
                        {revealText}
                    </p>
                </motion.div>

                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={{ duration: isMouseOver ? 0 : 0.4 }}
                    className="h-40 w-0.5 bg-gradient-to-b from-transparent to-[#1d1c20] dark:to-white absolute z-50"
                ></motion.div>

                {/* Enhanced and Integrated Overflow-hidden Section */}
                <div className="overflow-hidden w-full h-full absolute top-0 left-0">
                    <p className="text-2xl md:text-4xl lg:text-5xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6e7681] to-[#b8c1ec] dark:from-[#a5b4fc] dark:to-[#6366f1]">
                        {text}
                    </p>
                    <MemoizedStars />
                </div>
            </div>
        </div>

    );
};

export const TextRevealCardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2 className={twMerge("text-black dark:text-white text-lg mb-2", className)}>
            {children}
        </h2>
    );
};

export const TextRevealCardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
    );
};

const Stars = () => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(140)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block"
                ></motion.span>
            ))}
        </div>
    );
};

export const MemoizedStars = memo(Stars);
