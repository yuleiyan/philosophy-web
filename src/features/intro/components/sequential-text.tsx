import MultipleFadeAnimation from '@/components/animations/multiple-fade-animation';
import { measureText } from '@/utils/measureText';
import { useEffect, useRef, useState } from 'react';

export default function SequentialText({ text }:
    { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);
    const [animate, setAnimate] = useState(false);

    const handleResize = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const words = text.split(' ');
            const newLines = words.reduce((acc, word) => {
                const lastLine = acc.length > 0 ? acc[acc.length - 1] : '';
                const testLine = lastLine + (lastLine.length ? ' ' : '') + word;
                const testLineWidth = measureText(testLine, 'text-[max(30px,calc(15px+2.34375vw))]', 'Maghfirea');

                if (testLineWidth <= containerWidth) {
                    acc[acc.length - 1] = testLine;
                } else {
                    acc.push(word);
                }
                return acc;
            }, ['']);

            setLines(newLines);
        }
    };

    useEffect(() => {
        handleResize();
        setAnimate(false);
        setTimeout(() => {
            setAnimate(true);
        }, 50);
    }, [text]);

    useEffect(() => {
        const resizeListener = () => handleResize();
        window.addEventListener('resize', resizeListener);
        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    return (
        <div ref={containerRef} className="text-center2 text-title font-maghfirea">
            {animate && (
                <MultipleFadeAnimation>
                    {lines.map((line, index) => <div key={index} dangerouslySetInnerHTML={{ __html: line }}></div>)}
                </MultipleFadeAnimation>
            )}
        </div>
    );
};
