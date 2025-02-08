import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Profile"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          />
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                Hello! I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code and intuitive interfaces.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through technical writing.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
