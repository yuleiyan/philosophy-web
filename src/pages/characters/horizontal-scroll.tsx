import { RoutesPaths } from "@/routes/routes-paths";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import MarkdownRenderer from "@/components/markdown-renderer";
import PictureBuddhism from '/src/features/characters/buddhism/assets/images/buddhism.webp';
import PictureCatholicism from '/src/features/characters/catholicism/assets/images/catholicism.webp';
import PictureEgyptian from '/src/features/characters/egyptian/assets/images/egyptian.webp';
import PictureMasai from '/src/features/characters/masai/assets/images/masai.webp';
import PictureMaya from '/src/features/characters/maya/assets/images/maya.webp';


const text = `
> "Preocuparse por los años y los siglos en que ya no estaremos entre los vivos es como preocuparse por los años que han precedido nuestro nacimiento. Ni antes nos dolió, ni después nos dolerá."  
> – Lucrecio
`;

interface HorizontalScrollProps {
    className?: string;
}

const HorizontalScroll = ({ className }: HorizontalScrollProps) => {
    return (
        <div className={className}>
            <HorizontalScrollCarousel />

            <div className='text-white mt-[5vh] container characters-text'>
                <MarkdownRenderer texts={text} />
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0.7%", "-83%"]);

    return (
        <section ref={targetRef} className="h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-5">
                    {cards.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <Link to={card.path}>
            <div
                className="group relative w-[90vw] h-[50vh] md:w-[30vw] md:h-[80vh] overflow-hidden "
            >
                <div
                    style={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "100% 10%",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-52 left-0 right-0 bottom-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-2xl font-bold uppercase text-white backdrop-blur-sm">
                        {card.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default HorizontalScroll;

type CardType = {
    path: string;
    imageUrl: string;
    title: string;
};



const cards: CardType[] = [
    {
        path: RoutesPaths.CHARACTERS.CATHOLICISM.path,
        imageUrl: PictureCatholicism,
        title: "CATOLICISMO",
    },
    {
        path: RoutesPaths.CHARACTERS.BUDDHISM.path,
        imageUrl: PictureBuddhism,
        title: "BUDISMO",
    },
    {
        path: RoutesPaths.CHARACTERS.EQYPTIAN.path,
        imageUrl: PictureEgyptian,
        title: "EGIPCIO",
    },
    {
        path: RoutesPaths.CHARACTERS.MASAI.path,
        imageUrl: PictureMasai,
        title: "MASAI",
    },
    {
        path: RoutesPaths.CHARACTERS.MAYA.path,
        imageUrl: PictureMaya,
        title: "MAYA",
    },
];