import MultipleFadeAnimation from '@/components/animations/multiple-fade-animation';
import Markdown from 'react-markdown';

interface MarkdownComponentsProps {
    texts: string;
}

export default function MarkdownRenderer({ texts }: MarkdownComponentsProps) {
    const items = texts.split('\n').map((line, index) => (
        <Markdown key={index}>{line}</Markdown>
    ));

    return (<div>
        <MultipleFadeAnimation
        >
            {items}
        </MultipleFadeAnimation>
    </div>);
}

