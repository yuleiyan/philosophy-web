import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';

// Tipo para opciones configurables
interface ScrollVideoConfig {
    initialPlaybackRate?: number;
    maxPlaybackRate?: number;
    minPlaybackRate?: number;
}

export const useScrollControlledVideo = (
    videoRef: React.RefObject<HTMLVideoElement>,
    scrollRef: React.RefObject<HTMLDivElement>,
    config?: ScrollVideoConfig
) => {
    const {
        initialPlaybackRate = 1,
        maxPlaybackRate = 2,
        minPlaybackRate = 0.0625
    } = config || {};

    const frameId = useRef<number | null>(null);
    const { scrollY } = useScroll({ target: scrollRef });
    const lastScrollY = useRef(0);
    const lastTime = useRef(Date.now());

    const updatePlaybackRate = () => {
        if (!videoRef.current) return;

        const now = Date.now();
        const timeDelta = now - lastTime.current;
        const scrollYDelta = scrollY.get() - lastScrollY.current;

        if (timeDelta) {
            let speed: number;
            let playbackRate = initialPlaybackRate;

            if (scrollYDelta > 0) {
                speed = Math.abs(scrollYDelta / timeDelta);
                playbackRate = Math.min(Math.max(1, speed * 5), maxPlaybackRate);
            } else if (scrollYDelta < 0) {
                speed = Math.abs(scrollYDelta / timeDelta);
                playbackRate = Math.min(Math.max(minPlaybackRate, speed / 5), 1);
            }

            videoRef.current.playbackRate = playbackRate;
        }

        lastTime.current = now;
        lastScrollY.current = scrollY.get();
        frameId.current = requestAnimationFrame(updatePlaybackRate);
    };

    useEffect(() => {
        frameId.current = requestAnimationFrame(updatePlaybackRate);

        return () => {
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, []);
};

