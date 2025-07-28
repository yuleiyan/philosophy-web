import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Button2() {
    // Definir las variantes de animación para framer-motion
    const textVariants: Variants = {
        initial: {
            color: '#ffffff'
        },
        hover: {
            color: '#000000'
        }
    };

    const circleVariants: Variants = {
        initial: {
            width: '100%',
            height: 0,
            padding: 0,
            background: '#ffffff',
            borderRadius: '100%',
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            }

        },
        hover: {
            width: '120%',// Ajusta según necesidad
            height: '150%', // Ajusta según necesidad
            background: '#ffffff',
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            }
        }
    };

    return (
        <motion.button className="relative rounded-full h-14 w-14 border border-primary bg-transparent overflow-hidden inline-flex items-center justify-center"
            animate="initial"
            whileHover="hover"
        >
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6"
                variants={circleVariants}
            />
            <motion.div
                className="relative text-center text-white"
                variants={textVariants}
            >
                <ChevronRight className="h-4 w-4 text-center" />
            </motion.div>
        </motion.button>
    );
};
