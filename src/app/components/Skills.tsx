import MasonryLayout from "./MasonryLayout";
import * as motion from "motion/react-client";
import { Server, Shield, Cloud, Terminal, GitBranch, Code } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Security",
      icon: <Shield className="w-8 h-8" />,
      skills: [
        "Penetration Testing",
        "Ethical Hacking",
        "Web Exploitation",
        "System Hardening",
        "Network Security",
        "OWASP",
        "Cryptography",
        "Network Scanning",
        "Nmap", "Wireshark", "Metasploit"
      ],
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["Linux", "Docker", "Self-hosting", "Backup Management", "Nginx", "Apache"],
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git", "CI/CD", "System Troubleshooting", "GitHub Actions", "Jenkins"],
    },
    {
      title: "Web Services",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Cloudflare", "SSL", "DNS", "AWS (EC2, S3)", "Firebase"],
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-6 sm:px-8 md:px-20 lg:px-32 bg-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl sm:text-8xl md:text-9xl lg:text-[150px] font-mono tracking-tighter text-gray-800 mb-12"
      >
        SKILLS
      </motion.h2>

      <MasonryLayout>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-gray-800">{category.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-josefinSlab">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </MasonryLayout>
    </div>
  );
};

export default Skills;
