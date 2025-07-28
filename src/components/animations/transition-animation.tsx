import { motion } from "framer-motion";

const TransitionAnimation = (OgComponent: React.ComponentType) => {
    return () => (
        <>
            <OgComponent />

            <motion.div
                className="slide-in-top"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="slide-in-botton"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="slide-out-top"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="slide-out-botton"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default TransitionAnimation;