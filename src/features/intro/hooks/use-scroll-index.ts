import { MotionValue, useMotionValueEvent } from "framer-motion";
import { Dispatch } from "react";

export const useScrollIndex = (
    scrollYProgress: MotionValue<number>,
    setIndex: Dispatch<number>,
    arrayLength: number
) => {
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const maxIndex = arrayLength - 1;
        const newIndex = Math.floor(latest * (maxIndex + 2));
        setIndex(newIndex <= maxIndex ? newIndex : maxIndex);
    });
}