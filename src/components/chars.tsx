import { motion } from "framer-motion";
import { translate } from "@/components/navbar/navbar-anim";


export default function GetChars(word: string) {
    let chars: React.ReactElement[] = [];
    word.split("").forEach((char: string, i: number) => {
        chars.push(
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate} initial="initial"
                animate="open"
                exit="closed"
                key={char + i}>
                {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
        )
    })
    return chars;
}