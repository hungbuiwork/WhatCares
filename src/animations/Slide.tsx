import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  x?: number | string;
  y?: number | string;
  delay?: number;
  damping?: number;
  className?: string;
}
export const Slide = ({
  children,
  width = "fit-content",
  x = 0,
  y = 200,
  delay = 0,
  damping = 20,
  className = "",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: x, y: y },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: delay,
          type: "spring",
          stiffness: 50,
          damping: damping,
        }}
        className= {className}
      >
        <div className=" z-10">{children}</div>
      </motion.div>
    </div>
  );
};
