import { useEffect } from "react";

export const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // if ('scrollRestoration' in window.history) {
        //     window.history.scrollRestoration = 'manual'
        // }
    }, []);
}