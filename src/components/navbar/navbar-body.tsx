import { blur, height } from '@/components/navbar/navbar-anim';
import { RoutePath, RoutesPaths } from '@/routes/routes-paths';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-router-dom";
import GetChars from '../chars';

export default function NavbarBody() {
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });


    const navbarLinks: RoutePath[] = [
        RoutesPaths.HOME,
        RoutesPaths.INTRO,
        RoutesPaths.CHARACTERS.CHARACTERS,
        RoutesPaths.ABOUT_PROJECT,
    ];
    
    return (
        <motion.div
            className="overflow-hidden"
            variants={height}
            initial="initial"
            animate="open"
            exit="closed"
        >
            <div className="flex gap-12">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-wrap mt-10 lg:max-w-5xl lg:mt-20">
                        {navbarLinks.map((link, index) => {
                            const { title, path } = link;
                            return (
                                <Link
                                    key={`l_${index}`}
                                    to={path}
                                >
                                    <motion.div
                                        className={`m-0 flex text-2xl pr-7 pb-7 lg:pb-20 font-graphik font-light lg:text-[5vw] lg:pr-[2vw]`}
                                        onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                                        onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                                        variants={blur}
                                        animate={selectedLink.isActive && selectedLink.index != index
                                            ? "open" : "closed"}>
                                        {GetChars(title)}
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
