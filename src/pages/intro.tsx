import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SequentialText from '../features/intro/components/sequential-text';

import { useScrollIndex } from '@/features/intro/hooks/use-scroll-index';
import fog_animation4 from '/src/assets/videos/fog_animation4.mp4';
import depth_map from '/src/features/intro/assets/images/depth_map.webp';
import image_end from '/src/features/intro/assets/images/image_end.webp';
import image_start from '/src/features/intro/assets/images/image_start.webp';
import music from '/src/features/intro/assets/sounds/intro_music.ogg';

import MultipleFadeAnimation from '@/components/animations/multiple-fade-animation';
import ButtonCircleAnimated from '@/components/ui-animated/button-circle-animated';
import { useRedirect } from '@/contexts/RedirectContext';
import { useScrollControlledVideo } from '@/features/intro/hooks/use-video-scroll-control';
import { useDisableScroll } from '@/hooks/use-disable-scroll';
import { RoutesPaths } from '@/routes/routes-paths';
import { ArrowDown, Settings, Volume1, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';


function Intro() {
    const imageTransitionDuration = 2;

    const { previousPath } = useRedirect();

    const images = [depth_map, image_start, image_end];

    const texts = [
        "En una era, donde el tiempo se confunde con la eternidad.",
        "La muerte, cansada de ser considerada siempre el final de la existencia, desafía a cinco civilizaciones.",
        "Cada una, variadas en cultura y tiempo, son impuestas a desafíos de ingenio y moralidad, enfrentando y redescubriendo a la misma Muerte.",
        "La vida interviene, a veces cruel en su indiferencia o magnánima en su gracia, dotó a cada civilización con fe y creencias propias.",
        "En este juego eterno entre  Muerte y  Vida, el destino de los mortales pende de un hilo, aventurándose en el intrincado laberinto del destino y libre albedrío."
    ];

    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [indexText, setIndexText] = useState(0);
    const [hookedYPostion, setHookedYPosition] = useState(0);
    const fogVideoRef = useRef<HTMLVideoElement>(null);

    useDisableScroll(imageTransitionDuration);

    const { scrollYProgress } = useScroll({ target: scrollRef });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })

    let imagesOpacity: MotionValue<number>[] = [];

    imagesOpacity[0] = useTransform(scrollYProgress, [0, 0.33, 0.6, 1], [0.9, 0.8, 0.9, 0]);
    imagesOpacity[1] = useTransform(scrollYProgress, [0, 0.33, 0.6, 1], [0.1, 0.2, 0.1, 1]);
    imagesOpacity[2] = useTransform(scrollYProgress, [0, 0.33, 0.6, 1], [0, 0, 0.4, 0.8]);

    useScrollControlledVideo(fogVideoRef, scrollRef);

    useScrollIndex(scrollYProgress, setIndexText, texts.length);

    const initInterfaceVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delay: imageTransitionDuration,
                ease: [0.22, 1, 0.36, 1],
                duration: 2.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 2.5
            }
        }
    }

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            className="w-full h-[900vh] font-maghfirea text-white" ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 7, }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut" } }}
        >
            {images.map((image, i) => (
                <motion.div
                    key={i}
                    className="fixed w-full h-full bg-cover bg-center"
                    initial={{ y: "10", scale: 1.5 }}
                    animate={{ y: 0.6, scale: 1.4 }}
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: imagesOpacity[i],
                        scale: useTransform(scrollYProgress, [0, 1], [1.4, 1.009])
                    }}
                    transition={{
                        duration: imageTransitionDuration,
                        ease: [0, 0.16, 0.34, 1],
                        opacity: {
                            ease: [0, 0.16, 0.34, 1],
                        }
                    }}
                />
            ))}

            <motion.video
                ref={fogVideoRef}
                className="fixed w-full h-full object-cover"
                autoPlay
                loop
                muted
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.2,
                    transition: {
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        duration: 1.5
                    }
                }}
                style={{ opacity: useTransform(scrollYProgress, [0, 0.8], [0.2, 0]) }}
                src={fog_animation4}
            >
                Tu navegador no soporta vídeos HTML5.
            </motion.video>

            <div className="fixed top-0 left-0 right-0 bottom-0 m-7 border border-transparent">
                <motion.div
                    className="text-center md:absolute md:left-0 md:top-0"
                    initial='initial'
                    animate='animate'
                    variants={initInterfaceVariants}
                >
                </motion.div>

                <motion.div
                    className="text-center2"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            duration: 2.5
                        }
                    }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.8, 0.95], [1, 1, 0]),
                    }}
                >
                    <h1 className="text-title">
                        <SequentialText text={texts[indexText]} />
                    </h1>
                </motion.div>

                <AnimatePresence>
                    {hookedYPostion <= 0.13 && (
                        <motion.div
                            key={1}
                            className='absolute bottom-20 left-1/2 -translate-x-1/2 
                                flex flex-col items-center gap-y-6'
                            variants={initInterfaceVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <MultipleFadeAnimation
                                className='relative flex flex-col items-center'
                                duration={1.5}
                                staggerChildren={3.5}
                            >
                                <ButtonCircleAnimated
                                    className='cursor-default'
                                    variant='outline'
                                    size='2xl'
                                    ripple
                                    onHoverAnimation={false}
                                    onClickAnimation={false}
                                >
                                    <motion.div
                                        animate={{
                                            y: ["0%", "30%", "-30%", "0%"],
                                            opacity: [1, 0, 0, 1],
                                            transition: {
                                                duration: 0.8,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                                ease: "easeOut"
                                            }
                                        }}

                                    >
                                        <ArrowDown size={36} strokeWidth={0.5} />
                                    </motion.div>
                                </ButtonCircleAnimated>

                                <p className='absolute top-10 text-nowrap font-graphik font-light'>
                                    Desliza el cursor para continuar
                                </p>
                            </MultipleFadeAnimation>
                        </motion.div>
                    )};

                    {hookedYPostion >= 0.99 && (
                        <motion.div
                            key={2}
                            className='absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-max'
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 1.5
                                }
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 1.5
                                }
                            }}
                        >
                            <MultipleFadeAnimation
                                className='relative flex flex-col items-center'
                                duration={1.5}
                                staggerChildren={1.5}
                            >
                                <div className='relative'>
                                    <motion.p className='text-[15vw]'>Vida y Muerte</motion.p>
                                    <motion.p className='absolute bottom-0 right-0 text-[5vw]'>Filosofía</motion.p>
                                </div>

                                <Link to={!previousPath || previousPath === RoutesPaths.INTRO.path ? RoutesPaths.HOME.path : previousPath}>
                                    <ButtonCircleAnimated
                                        variant='outline'
                                        size='2xl'
                                        ripple
                                        onClickAnimation

                                    >
                                        <p className='text-2xl'>ACCEDER</p>
                                    </ButtonCircleAnimated>
                                </Link>

                                <p className='absolute top-10 font-graphik text-nowrap'>
                                    Pulsa acceder para continuar
                                </p>
                            </MultipleFadeAnimation>
                        </motion.div>
                    )};
                </AnimatePresence>

                <motion.div
                    className="absolute -top-2 md:top-auto -left-3 md:left-auto md:right-0 md:bottom-0 flex gap-x-2 md:gap-x-3"
                    initial='initial'
                    animate='animate'
                    variants={initInterfaceVariants}
                >
                    <ButtonCircleAnimated
                        variant='intro'
                        size="sm"
                    >
                        <Settings size={16} strokeWidth={1.5} />
                    </ButtonCircleAnimated>

                    <ButtonCircleAnimated
                        variant='intro'
                        size="sm"
                        onClick={togglePlay}
                    >
                        {isPlaying
                            ? <Volume1 size={16} strokeWidth={1.5} />
                            : <VolumeX size={16} strokeWidth={1.5} />}

                        <audio ref={audioRef} loop>
                            <source src={music} />
                        </audio>
                    </ButtonCircleAnimated>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Intro;
