import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1708860028064-3303a016e88f"
  },
  {
    text: "Working with John was a pleasure. He brings creative solutions to complex problems and is always willing to go the extra mile.",
    author: "Mike Chen",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1708860028233-10da73ede2a0"
  },
  {
    text: "John's expertise in full-stack development helped us launch our product ahead of schedule. His commitment to quality is remarkable.",
    author: "Emily Brown",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1711980012199-2697edfc8794"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card">
                <CardContent className="p-6">
                  <p className="text-lg mb-6 italic">"{testimonials[current].text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{testimonials[current].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
