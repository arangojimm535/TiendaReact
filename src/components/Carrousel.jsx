import { images } from "../context/imgslider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

export function Carrousel() {
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 1000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <motion.div
      whileInView={() => setInterval(() => paginate(1), 7000)}
      // viewport={{ once: true }}
      className="sm:mt-4 relative flex justify-center items-center mb-7"
      style={
        window.screen.width < 767
          ? { width: "100%", height: "400px" }
          : { width: "100%", height: "500px" }
      }
    >
      <AnimatePresence initial={false} custom={direction}>
        <a
          style={
            window.screen.width < 767
              ? { width: "95%", height: "400px" }
              : { width: "90%", height: "500px" }
          }
        >
          <motion.img
            key={page}
            className="rounded-3xl absolute object-cover"
            style={
              window.screen.width < 767
                ? { width: "95%", height: "400px" }
                : { width: "90%", height: "500px" }
            }
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.8 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </a>
      </AnimatePresence>
      <div className="absolute bottom-7 rounded-full px-2 z-10">
        <span className="text-slate-200">{imageIndex == 0 ? "⬤" : "○"}</span>
        <span className="text-slate-200">{imageIndex == 1 ? "⬤" : "○"}</span>
        <span className="text-slate-200">{imageIndex == 2 ? "⬤" : "○"}</span>
      </div>
    </motion.div>
  );
}
