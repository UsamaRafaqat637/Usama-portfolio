import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  // FaNodeJs,
  FaPython,
   FaGithub,
  FaGitAlt,
  // FaLinux,
  // FaFigma,
  // FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  // SiPostgresql,
  // SiMongodb,
  // SiGraphql,
  // SiJest,
  // SiWebpack,
  SiRedux,
  // SiFirebase,
  SiVercel,
  SiVite,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
// import { FcWorkflow } from "react-icons/fc";
// import {  ChatGPTIcon, DeepSeekIcon } 
//   from "../../components/ui/Icons"; 

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="relative z-10 p-6">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="relative flex items-center gap-2 px-3 py-2 text-gray-100 transition-all duration-300 border-gray-600 group/badge bg-gray-800/50 hover:bg-gray-700/80 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transition-transform duration-300 transform group-hover/badge:scale-110">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap  className="w-4 h-4 text-white" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    // {
    //   icon: Database,
    //   title: "Backend Development",
    //   color: "text-green-400",
    //   skills: [
    //     {
    //       name: "React.js",
    //       icon: <FaReact className="w-4 h-4 text-[#339933]" />,
    //     },
    //     {
    //       name: "Python",
    //       icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
    //     },
    //     {
    //       name: "Tailwind CSS",
    //       icon: <SiTailwindcss className="w-4 h-4 text-[#336791]" />,
    //     },
    //     {
    //       name: "Flask",
    //       icon: <SiFlask className="w-4 h-4 text-[#47A248]" />,
    //     },
    //     {
    //       name: "REST APIs",
    //       icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
    //     },
    //     // {
    //     //   name: "GraphQL",
    //     //   icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
    //     // },
    //   ],
    // },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        // { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        // {
        //   name: "Wireframing",
        //   icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        // },
        // {
        //   name: "Prototyping",
        //   icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        // },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        // { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        // {
        //   name: "Docker",
        //   icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        // },
        // { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        // {
        //   name: "Kubernetes",
        //   icon: <BsGrid1X2 className="w-4 h-4 text-[#326CE5]" />,
        // },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Github", icon: < FaGithub className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        // { name: "Chatgpt", icon: <ChatGPTIcon className="w-4 h-4 text-[#C21325]" /> },
        // {
        //   name: "DeepSeek",
        //   icon: <DeepSeekIcon  className="w-4 h-4 text-[#8DD6F9]" />,
        // },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        // {
        //   name: "Firebase",
        //   icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        // },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "SVG Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        // {
        //   name: "3D Modeling",
        //   icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        // },
        // {
        //   name: "Motion Graphics",
        //   icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        // },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-20"></div>

      <section className="container relative z-10 px-4 mx-auto py-11">
        <div className="flex items-center justify-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
