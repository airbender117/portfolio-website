import * as motion from "motion/react-client";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Personal Website Deployment",
      description:
        "Deployed and maintained a personal website, configured Cloudflare for DNS, SSL, and security.",
      techStack: ["Cloudflare", "SSL", "DNS"],
      githubUrl: "https://github.com/airbender117",
    },
    {
      title: "Home Lab & Self-Hosting",
      description:
        "Installed and managed a local Linux server and backup systems for self-hosting applications and services.",
      techStack: ["Linux", "Docker", "Self-hosting", "Backup Management"],
      githubUrl: "https://github.com/airbender117",
    },
    {
      title: "Cybersecurity Practice",
      description:
        "Practiced cybersecurity fundamentals through TryHackMe and Hack The Box labs, learning network scanning, web exploitation, and system hardening.",
      techStack: [
        "Cybersecurity",
        "Network Scanning",
        "Web Exploitation",
        "System Hardening",
      ],
      githubUrl: "https://github.com/airbender117",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-6 sm:px-8 md:px-20 lg:px-32 bg-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl sm:text-8xl md:text-9xl lg:text-[150px] font-mono tracking-tighter text-gray-800 mb-12"
      >
        PROJECTS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-josefinSlab">
              {project.title}
            </h3>

            <p className="text-gray-700 text-base lg:text-lg mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 text-white text-xs sm:text-sm rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
