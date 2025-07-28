import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
    src: string; // URL del video
    delay: number; // Segundos antes de que termine el video para iniciar el próximo
};

const VideoPlayerProps = ({ src, delay }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videos, setVideos] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const currentVideo = videoRef.current;
        if (currentVideo) {
            const handleVideoPlay = () => {
                // Calcular cuándo empezar el próximo video
                let timeout = (currentVideo.duration - delay) * 1000;
                setTimeout(() => {
                    setVideos(prev => [
                        ...prev,
                        <Video src={src} key={prev.length} />
                    ]);
                }, timeout);
            };

            currentVideo.addEventListener('play', handleVideoPlay);

            return () => {
                currentVideo.removeEventListener('play', handleVideoPlay);
            };
        }
    }, [src, delay]);

    return (
        <div>
            <motion.video
                ref={videoRef}
                src={src}
                autoPlay loop muted
                className='fixed w-full h-full object-cover opacity-60'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 27 }}
            />
            {videos}
        </div>
    );
};



const Video: React.FC<{ src: string; key: number }> = ({ src }) => {
    return (

        <motion.video
            className='fixed w-full h-full object-cover'
            src={src}
            autoPlay loop muted
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 27 }}
        />
    );
};

export default VideoPlayerProps;
