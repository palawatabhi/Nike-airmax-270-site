import { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <section className="min-h-screen flex flex-col justify-center items-start px-10 md:px-20 relative overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          NIKE AIRMAX 270
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          The future of comfort. Redefine your walk, feel the air with every step.
        </motion.p>

        <motion.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          src="https://i.ibb.co/Dz9V4nB/airmax270.png"
          alt="Nike Airmax 270"
          className="absolute right-0 bottom-0 w-2/3 md:w-1/2 max-w-[600px]"
        />
      </section>
    </div>
  );
}
