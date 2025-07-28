import { opacity } from "@/components/navbar/navbar-anim";
import { TransitionValues } from '@/layouts/animations/transition-layout';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarBody from './navbar-body';
import { RoutesPaths } from "@/routes/routes-paths";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        latest > previous! && previous && latest > 150
            ? setHidden(true)
            : setHidden(false);
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <motion.div
            className="fixed top-0 z-10 w-full p-4 bg-[#181818] lg:p-5 border-b border-gray-600"
            onClick={() => { setHidden(false) }}
            onHoverStart={() => { setHidden(false) }}
            variants={{
                initial: { opacity: 0 },
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
            initial="initial"
            animate={isMounted ? (hidden ? "hidden" : "visible") : "initial"}
            transition={{
                delay: TransitionValues.HEADER.DELAY,
                duration: TransitionValues.HEADER.DURATION,
                ease: TransitionValues.HEADER.EASE
            }}
        >
            <div className="flex justify-center relative uppercase text-xs font-normal">
                <Link to={RoutesPaths.HOME.path} className="absolute left-0 top-1/2 -translate-y-1/2 font-sispany font-bold select-none md:text-lg">I N I C I O</Link>
                <motion.div
                    onClick={() => setIsActive(!isActive)}
                    className="flex items-center justify-center gap-2 cursor-pointer h-[16px]"
                >
                    <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                    <div className="relative flex items-center">
                        <motion.p className='absolute' variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p className='absolute' variants={opacity} animate={isActive ? "open" : "closed"}>Cerrar</motion.p>
                    </div>
                </motion.div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <NavbarBody />}
            </AnimatePresence>
        </motion.div>
    );
}
