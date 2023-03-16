import { motion } from "framer-motion";
import Search from "./Search";

export function Nav() {
  return (
    <div className=" mt-2 h-32 container mx-auto">
      <nav className="flex flex-row items-center justify-around">
        <button className="md:hidden bg-red-200 rounded-full">
          <img src="./images/burguer.png" alt="" className="w-10 h-10 p-2" />
        </button>
        <div className="flex">
          <motion.img
            src="./images/descarga.jpg"
            alt="logo"
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ duration: 2}}
            className="object-cover h-28 w-28"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="md:w-96 sm:hidden"
        >
          <Search />
        </motion.div>
        <motion.div className="sm:hidden">
          <ul className="flex flex-row">
            <li>
              <a href="" className="font-semibold hover:text-red-300">
                Iniciar sesión
              </a>
            </li>
            <span className="font-semibold px-2">/</span>
            <li>
              <a href="" className="font-semibold hover:text-red-300">
                Registrarse
              </a>
            </li>
          </ul>
        </motion.div>

        <div className="flex flex-row">
          <a href="">
            <img
              src="./images/user.png"
              alt=""
              className="object-cover md:hidden sm:mr-5 sm:h-8 sm:w-8"
            />
          </a>
          <a href="">
            <img
              src="./images/bag.png"
              alt=""
              className="object-cover h-10 w-10 sm:h-8 sm:w-8"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
