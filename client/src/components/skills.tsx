import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "JavaScript/ReactJS", level: 90 },
  { name: "Node.js/Express.js", level: 85 },
  { name: "MongoDB/MERN Stack", level: 85 },
  { name: "REST API Development", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "C++ Programming", level: 80 },
  { name: "Git/GitHub", level: 85 },
  { name: "JWT/Bcrypt", level: 75 },
  { name: "Axios/NPM", level: 85 },
  { name: "MATLAB", level: 70 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}