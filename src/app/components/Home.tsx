import { ArrowDown } from "lucide-react";
import * as motion from "motion/react-client";

const HomePage = () => {
  return (
    <div
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center relative p-4 sm:p-8 text-center bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-20 text-center"
      >
        <p className="text-xl sm:text-3xl text-gray-700 font-josefinSlab mb-2">
          Full-Stack Developer & Security Enthusiast
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 tracking-tighter">
          ANURAG SHRESTHA
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-josefinSlab mt-4 max-w-2xl mx-auto">
          Crafting secure and scalable software solutions with a passion for
          cutting-edge technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="absolute right-8 bottom-8 flex flex-col items-center"
      >
        <p className="text-center text-lg sm:text-xl lg:text-2xl text-gray-800 mb-2">
          Explore
        </p>
        <ArrowDown className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-800 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default HomePage;

