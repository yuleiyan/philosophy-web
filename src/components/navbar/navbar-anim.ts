import { Variants } from "framer-motion"

const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] }

export const opacity: Variants = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { duration: 0.35 }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.35 }
    }
}

export const height: Variants = {
    initial: {
        height: 0
    },
    open: {
        height: "auto",
        transition
    },
    closed: {
        height: 0,
        transition
    }
}

export const background: Variants = {
    initial: {
        height: 0
    },
    open: {
        height: "100vh",
        transition
    },
    closed: {
        height: 0,
        transition
    }
}

export const blur: Variants = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },
    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: { duration: 0.3 }
    },
    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 0.3 }

    }
}

export const translate: Variants = {
    initial: {
        y: "100%",
        opacity: 0
    },
    open: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: i[0] }
    }),
    closed: (i) => ({
        y: "100%",
        opacity: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i[1] }
    })
}
