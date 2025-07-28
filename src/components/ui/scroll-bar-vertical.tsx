import { useScroll, useSpring, motion } from 'framer-motion';
import React from 'react'

interface ScrollBarVerticalProps {
    children: React.ReactNode;
}

export default function ScrollBarVertical({ children }: ScrollBarVerticalProps) {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {children}
            <div className="progress-track" />
            <motion.div className="progress-bar" style={{
                scaleY,
            }} />

        </>
    );
}
