import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const RevealFromBottom = ({ children }) => {

    const { ref, inView } = useInView({ threshold: 0 });
    const controls = useAnimation();

    const controlsVariant = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            }
        }

    }

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
        if (!inView) {
            controls.start('initial');
        }
    }, [controls, inView]);


    return (
        <div ref={ref}>
            <motion.div variants={controlsVariant} animate={controls}>
                {children}
            </motion.div>
        </div>
    );
}

export const RevealFromRight = ({ children }) => {

    const { ref, inView } = useInView({ threshold: 0 });
    const controls = useAnimation();

    const controlsVariant = {
        initial: {
            x: 400,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            }
        }

    }

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
        if (!inView) {
            controls.start('initial');
        }
    }, [controls, inView]);


    return (
        <div ref={ref}>
            <motion.div variants={controlsVariant} animate={controls}>
                {children}
            </motion.div>
        </div>
    );
}


export const RevealFromLeft = ({ children }) => {

    const { ref, inView } = useInView({ threshold: 0 });
    const controls = useAnimation();

    const controlsVariant = {
        initial: {
            x: -300,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            }
        }

    }

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
        if (!inView) {
            controls.start('initial');
        }
    }, [controls, inView]);


    return (
        <div ref={ref}>
            <motion.div variants={controlsVariant} animate={controls}>
                {children}
            </motion.div>
        </div>
    );
}