import { motion } from "framer-motion";
import { opacity } from "@/components/navbar/navbar-anim";

interface NavbarImageProps {
    src: string;
    isActive: boolean;
}

export default function NavbarImage({ src, isActive }: NavbarImageProps) {
    return (
        <motion.div
            className="imageContainer hidden lg:block lg:w-[500px] lg:h-[450px] relative"
            variants={opacity}
            initial="initial"
            animate={isActive ? "open" : "closed"}
        >
            <img
                className="absolute object-cover"
                src={`/images/${src}`}
                alt="image"
            />
        </motion.div>
    )
}
