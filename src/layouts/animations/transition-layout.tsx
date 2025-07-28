import { motion } from "framer-motion";

const LAYOUT_DURATION = 1;

export const TransitionValues = {
    LAYOUT: {
        DURATION: LAYOUT_DURATION,
        EASE: [0.22, 1, 0.36, 1]
    },
    PAGE: {
        DELAY: LAYOUT_DURATION / 2,
        DURATION: 0.5,
        EASE: "easeIn"
    },
    HEADER: {
        DELAY: LAYOUT_DURATION / 4,
        DURATION: 0.5,
        EASE: "easeIn"
    }
};

const TransitionLayout = (OgComponent: React.ComponentType) => {
    return () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: TransitionValues.PAGE.DELAY,
                    duration: TransitionValues.PAGE.DURATION,
                    ease: TransitionValues.PAGE.EASE
                }}
            >
                <OgComponent />
            </motion.div>

            <motion.div
                key={2}
                className="fixed top-0 left-0 w-screen h-screen bg-black origin-top z-[11]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: TransitionValues.LAYOUT.DURATION, ease: TransitionValues.LAYOUT.EASE }}
            />

            <motion.div
                key={3}
                className="fixed top-0 left-0 w-screen h-screen bg-black origin-bottom z-[11]"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: TransitionValues.LAYOUT.DURATION, ease: TransitionValues.LAYOUT.EASE }}
            />

        </>
    );
};

export default TransitionLayout;