import { useState,useEffect } from "react";
import images from "../context/imgslider";
import {motion, useMotionValue, useTransform} from 'framer-motion'

export function Carrousel() {
  const x = useMotionValue(0);
  const indexImg = useTransform(x, [-10, 0, 10], [-1, 0, 1])
  console.log(x.get())
  
  const [imgActual, setImgActual] = useState(0);
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 10, right: 10 }}
      className="md:mx-20 sm:mx-4 sm:mt-4"
    >
      <motion.img
        className="object-cover rounded-2xl max-w-full pointer-events-none mx-auto my-auto"
        src={images[imgActual]}
        style={window.screen.width < 767
          ? { width: "100%", height: "400px" }
            : { width: "100%", height: "500px" }
  }
      />
    </motion.div>
  );
}
