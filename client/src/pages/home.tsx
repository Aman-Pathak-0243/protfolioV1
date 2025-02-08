import ParticleBackground from "@/components/particle-background";
import ThemeToggle from "@/components/theme-toggle";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
