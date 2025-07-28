
import { useLocation, useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";


import { Route, Routes } from "react-router-dom";


import FullScreenLayout from "@/layouts/full-screen-layout";
import MainLayout from "@/layouts/main-layout";
import Catholicism from "@/pages/characters/character/catholicism";
import Characters from "@/pages/characters/characters";
import Home from "@/pages/home";
import Intro from "@/pages/intro";
import NotFound from "@/pages/not-found";


import AboutProject from "@/pages/about-project";
import { useRedirect } from "@/contexts/RedirectContext";
import Buddhism from "@/pages/characters/character/buddhism";
import { RoutesPaths } from "@/routes/routes-paths";
import Egyptian from "@/pages/characters/character/egyptian";
import Masai from "@/pages/characters/character/masai";
import Maya from "@/pages/characters/character/maya";

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const { hasEntered, setHasEntered, setPreviousPath } = useRedirect();

    useEffect(() => {
        if (location.pathname !== '/') {
            setPreviousPath(location.pathname);
        }

        if (!hasEntered) {
            setHasEntered(true);
            navigate('/');
        }
    }, [location]);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route path="*" element={<NotFound />}></Route>

                <Route element={<FullScreenLayout />}>
                    <Route path={RoutesPaths.INTRO.path} element={<Intro />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path={RoutesPaths.HOME.path} element={<Home />} />

                    <Route path={RoutesPaths.CHARACTERS.CHARACTERS.path}>
                        <Route index element={<Characters />} />

                        <Route path={RoutesPaths.CHARACTERS.CATHOLICISM.path} element={<Catholicism />} />
                        <Route path={RoutesPaths.CHARACTERS.BUDDHISM.path} element={<Buddhism />} />
                        <Route path={RoutesPaths.CHARACTERS.EQYPTIAN.path} element={<Egyptian />} />
                        <Route path={RoutesPaths.CHARACTERS.MASAI.path} element={<Masai />} />
                        <Route path={RoutesPaths.CHARACTERS.MAYA.path} element={<Maya />} />
                    </Route>

                    <Route path={RoutesPaths.ABOUT_PROJECT.path} element={<AboutProject />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

