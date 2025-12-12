import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";

const About = () => {
  const text = `I am Anurag Shrestha, an Electronics, Communication, and Information Engineering student. I transform complex problems into elegant, scalable solutions. My expertise lies in backend development with Node.js, where I architect systems that are functional and secure by design.

My passion is at the intersection of software engineering and cybersecurity. I build robust infrastructures and defend against evolving threats. I craft efficient APIs, implement security protocols, and explore cutting-edge technologies.

I am driven by the challenge of creating digital solutions that matter. Let's build something secure, scalable, and impactful together.`;
  const words = text.split(" ");

  return (
    <div
      id="about"
      className="min-h-screen py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-20 lg:py-24 lg:px-32 bg-gray-100 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl sm:text-8xl md:text-9xl lg:text-[150px] font-mono tracking-tighter text-gray-800 mb-12"
      >
        ABOUT
      </motion.h2>

      <div className="md:flex items-start gap-8 relative w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <ArrowUpRight className="w-32 h-32 text-gray-700" />
        </motion.div>
        <div className="flex flex-wrap text-gray-800 text-justify font-josefinSlab text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="mr-2 sm:mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-3xl sm:text-4xl font-bold font-josefinSlab text-gray-900">
          Education
        </h3>
        <p className="text-xl sm:text-2xl mt-4 text-gray-700">
          BE in Electronics and Information Engineering
        </p>
        <p className="text-lg sm:text-xl text-gray-600">
          Paschimanchal Campus (2021-2025)
        </p>
      </div>
    </div>
  );
};
export default About;
