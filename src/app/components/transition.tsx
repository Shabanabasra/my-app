"use client";
import { animate, motion} from "framer-motion";
import { Children } from "react";

export default function Transition({
    Children,
    }:{
     Children:React.ReactNode;
    }) {
        return (
            <motion.div
             initial={{y:20,opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{ease: "easeInout", duration: 0.75}}
             >
                {Children}
             </motion.div>
        )
    }


