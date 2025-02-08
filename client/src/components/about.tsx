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
            src="..\public\images\profile.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          />
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                A passionate and highly motivated second-year B.Tech student at IIT Jammu with a strong foundation in Full-Stack Web Development and Data Structures & Algorithms. Currently maintaining a CGPA of 8.76.
              </p>
              <p className="text-lg">
                I am determined to leverage my technical expertise and innovative thinking to build transformative projects that propel business growth and drive cutting-edge technological advancements. As a Web Developer for KRITASH and MESH Clubs at IIT Jammu, I've led the development of multiple successful web projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}