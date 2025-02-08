import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Axios", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "REST API", level: 85 }
    ]
  },
  {
    name: "Databases & Stack",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "MERN Stack", level: 85 },
      { name: "MEAN Stack", level: 80 }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 80 },
      { name: "MATLAB", level: 75 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "NPM", level: 85 },
      { name: "PIP", level: 80 },
      { name: "JWT/Bcrypt", level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}