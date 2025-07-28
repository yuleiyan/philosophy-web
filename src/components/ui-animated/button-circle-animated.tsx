import { motion, useAnimationControls, Variants } from "framer-motion";
import { Button, ButtonProps } from "../ui/button";

interface ButtonCircleAnimated extends ButtonProps {
    ripple?: boolean;
    cursorDefault?: boolean;
    onHoverAnimation?: boolean;
    onClickAnimation?: boolean;
}

export default function ButtonCircleAnimated({ onHoverAnimation = true, onClickAnimation = true, ...props }: ButtonCircleAnimated) {
    const divControls = useAnimationControls();

    // Variants for the child elements
    const childrenVariants: Variants = {
        animate: {
            color: 'var(--text-intro)',
            transition: { duration: 0.1 }
        },
        hover: {
            color: 'var(--text-intro-hover)',
            transition: { duration: 0.1 },
        },
    };

    const circleVariants: Variants = {
        animate: {
            width: '50%',
            height: 0,
            padding: 0,
            background: '#ffffff',
            borderRadius: '100%',
            transition: {
                duration: 0.5,
                ease: [0.2, 0, 0, 1],
            }
        },
        hover: {
            width: '120%',
            height: '130%',
            background: '#ffffff',
            transition: {
                duration: 0.5,
                ease: [0.2, 0, 0, 1],
            }
        }
    };

    const rippleParentVariants: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.7,
            }
        }
    };

    const rippleChildrenVariants: Variants = {
        animate: {
            scale: [1, 1.4],
            opacity: [1, 0],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1.5,
                ease: "easeIn"
            },
        },
    };

    return (
        <>
            <Button
                className={props.className}
                size={props.size}
                onClick={(event) => {
                    if (props.onClick) props.onClick(event); // Only call onClick if it exists
                    if (!onClickAnimation) return;
                    divControls.start("animate");
                    divControls.start("hover");
                }}
                animate={divControls}
                initial={"animate"}
                whileHover={onHoverAnimation ? "hover" : ""}
                variant={props.variant}
            >
                <div className="h-full w-full relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2"
                        variants={circleVariants}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        variants={childrenVariants}
                    >
                        {props.children}
                    </motion.div>
                </div>

                {props.ripple && (
                    <motion.div
                        className="h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        animate="animate"
                        variants={rippleParentVariants}
                    >
                        <>
                            <motion.div
                                className="absolute w-full h-full border border-primary rounded-full"
                                variants={rippleChildrenVariants}
                            />
                            <motion.div
                                className="absolute w-full h-full border border-primary rounded-full"
                                variants={rippleChildrenVariants}
                            />
                        </>
                    </motion.div>
                )}
            </Button>
        </>
    );
}
