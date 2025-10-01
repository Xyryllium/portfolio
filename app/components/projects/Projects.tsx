import { projects } from "../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <section className="py-12 sm:py-20">
            <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400">
                        Featured Projects
                    </span>
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    A showcase of my recent work and side projects that demonstrate my skills and passion for development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}