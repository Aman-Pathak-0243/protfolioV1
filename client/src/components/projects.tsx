import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["TypeScript", "Redux", "Socket.io"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat interface with AI-powered responses",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["Next.js", "TailwindCSS", "OpenAI"],
    demo: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Code
                    </a>
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
