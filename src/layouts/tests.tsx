// MotionLayout.tsx
import { motion, MotionProps } from 'framer-motion';

interface MotionLayoutProps extends MotionProps {
    children: React.ReactNode;
}

const MotionLayout: React.FC<MotionLayoutProps> = ({ children, ...motionProps }) => {
    return (
        <motion.div {...motionProps}>
            {children}
        </motion.div>
    );
};

export default MotionLayout;
