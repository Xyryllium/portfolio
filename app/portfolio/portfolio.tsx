import { Introduction } from "~/components/Introduction";
import { TechStack } from "~/components/tech-stack/TechStack";
import { Timeline } from "~/components/timeline/Timeline";
import { Projects } from "~/components/projects/Projects";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";

export function Portfolio() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <section id="about" className="text-center min-h-screen flex flex-col items-center justify-center">
          <Introduction />
        </section>

        <section id="tech-stack" className="max-w-7xl mx-auto px-4 py-20">
          <TechStack />
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
          <Projects />
        </section>

        <section id="experience" className="max-w-7xl mx-auto px-4 py-20">
          <Timeline />
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}
