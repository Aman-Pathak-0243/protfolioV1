import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: "E-commerce Website (Meshopify)",
    description: "A fully functional e-Commerce platform using MERN stack with payment integration via Braintree, JWT authentication, and an intuitive admin panel.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Braintree"],
    demo: "#",
    github: "#"
  },
  {
    title: "Chat Application (Meshage)",
    description: "Real-time chat application with user authentication, direct messaging, and real-time notifications using Socket.IO.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["Node.js", "Express.js", "Socket.IO", "JWT"],
    demo: "#",
    github: "#"
  },
  {
    title: "MESH Club Website",
    description: "Led the development of the official MESH Club website at IIT Jammu, implementing responsive design and modern features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    demo: "#",
    github: "#"
  }
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('projects.title')}</h2>
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
                      <ExternalLink size={16} /> {t('projects.viewDemo')}
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> {t('projects.viewCode')}
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