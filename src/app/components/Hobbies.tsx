import * as motion from "motion/react-client";
import { Book, Music, Gamepad2, Mountain, HeartPulse } from "lucide-react";

interface Hobby {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Hobbies = () => {
  const hobbies: Hobby[] = [
    {
      title: "Reading",
      description:
        "Diving into tech books, cybersecurity literature, and sci-fi novels to fuel creativity and knowledge.",
      icon: <Book className="w-12 h-12" />,
    },
    {
      title: "Music",
      description:
        "Finding inspiration in various genres, from lo-fi beats while coding to rock music for creative breaks.",
      icon: <Music className="w-12 h-12" />,
    },
    {
      title: "Gaming",
      description:
        "Strategy and puzzle games that challenge problem-solving skills, much like debugging complex code.",
      icon: <Gamepad2 className="w-12 h-12" />,
    },
    {
      title: "Hiking",
      description:
        "Disconnecting from screens to reconnect with nature, finding clarity and fresh perspectives.",
      icon: <Mountain className="w-12 h-12" />,
    },
    {
      title: "Yoga",
      description:
        "Practicing yoga to maintain focus, balance, and mental clarity, which is essential for long coding sessions.",
      icon: <HeartPulse className="w-12 h-12" />,
    },
  ];

  return (
    <div
      id="hobby"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-6 sm:px-8 md:px-20 lg:px-32 bg-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl sm:text-8xl md:text-9xl lg:text-[150px] font-mono tracking-tighter text-gray-800 mb-8"
      >
        BEYOND CODE
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-josefinSlab mb-12 max-w-3xl"
      >
        When I&apos;m not architecting systems or exploring security
        vulnerabilities, you&apos;ll find me pursuing these passions.
      </motion.p>

      <div className="flex overflow-x-auto space-x-8 pb-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex-shrink-0 w-72 h-96 bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-gray-800 mb-4 transition-transform duration-300 group-hover:scale-110">
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-josefinSlab transition-opacity duration-300 group-hover:opacity-0">
                {hobby.title}
              </h3>
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 font-josefinSlab">
                  {hobby.title}
                </h3>
                <p className="text-white text-center text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
