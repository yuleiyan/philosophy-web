import { motion, Variants } from 'framer-motion';
import React from 'react';

interface MultipleFadeAnimationProps {
    children: React.ReactNode;
    keepShowing?: boolean;
    duration?: number;
    staggerChildren?: number;
    hiddenY?: number;
    ease?: number[];
    className?: string;
}

export default function MultipleFadeAnimation({
    children,
    duration = 1.2,
    staggerChildren = 0.2,
    hiddenY = 20,
    ease = [0, 0.16, 0.34, 1],
    className = "",
    ...props
}: MultipleFadeAnimationProps) {
    const childrenVariants: Variants = {
        hidden: {
            opacity: 0,
            y: hiddenY,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren,
                duration,
                ease
            },
        },
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                    <motion.div
                        key={index}
                        className={className}
                        variants={childrenVariants}
                    >
                        {child}
                    </motion.div>
                );
            }
            return child;
        });
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            animate={props.keepShowing ? "show" : ""}
            variants={childrenVariants}
        >
            {renderChildren()}
        </motion.div>
    );
}
