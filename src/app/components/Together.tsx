import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

const Together = () => {
  return (
    <div
      id="connect"
      className="w-full relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-24 flex flex-col items-center bg-gray-100"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-gray-300 pb-8 sm:pb-12 w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 font-mono font-bold uppercase tracking-tight leading-tight text-center sm:text-left mb-6 sm:mb-0">
          Let&apos;s Work <br /> Together
        </h2>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center sm:items-end"
        >
          <a
            href="mailto:Anuragshresthal17@gmail.com"
            className="uppercase text-gray-800 border-2 border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
          >
            Send me a message
          </a>
          <ArrowUpRight className="w-24 h-24 text-gray-700 mt-4 hidden sm:block" />
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center pt-12 sm:pt-16 lg:pt-24 w-full max-w-6xl">
        <h3 className="text-5xl sm:text-7xl text-center font-serif font-extrabold tracking-wider text-gray-800 mb-12 sm:mb-16">
          ANURAG
        </h3>

        <footer className="w-full flex flex-col sm:flex-row items-center justify-between p-4 text-gray-600">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 sm:mb-0 text-center sm:text-left text-base"
          >
            © 2025 My Portfolio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base"
          >
            <a
              href="https://x.com/Anuragdoss"
              className="hover:underline"
              target="_blank"
            >
              X
            </a>
            <a
              href="https://github.com/airbender117"
              className="hover:underline"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-shrestha-860b63262/"
              className="hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/Airbender117/"
              className="hover:underline"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/anu7ag_/"
              className="hover:underline"
              target="_blank"
            >
              Instagram
            </a>
          </motion.div>
        </footer>
      </div>

      <Button />
    </div>
  );
};

export default Together;