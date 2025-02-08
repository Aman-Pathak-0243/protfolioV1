import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (letterIndex > 0) {
          setLetterIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      } else {
        if (letterIndex < phrases[phraseIndex].length) {
          setLetterIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [phraseIndex, letterIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          John Doe
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground h-8"
        >
          {phrases[phraseIndex].substring(0, letterIndex)}
          <span className="animate-pulse">|</span>
        </motion.div>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
