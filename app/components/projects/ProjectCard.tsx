import type { ProjectProps } from "../../data/types";
import { GithubIcon } from "../icons";

export function ProjectCard({ title, description, technologies, image, liveUrl, githubUrl, featured }: ProjectProps) {
    return (
        <div className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'border-2 border-blue-600 dark:border-blue-400' : 'border border-gray-200 dark:border-gray-700'}`}>
            {featured && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                    </span>
                </div>
            )}

            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        width="400"
                        height="192"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl opacity-20 dark:opacity-30">💼</div>
                    </div>
                )}
            </div>

            <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
                        >
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        typeof githubUrl === 'string' ? (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-black dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <GithubIcon />
                                View Code
                            </a>
                        ) : (
                            <div className="flex gap-2">
                                {githubUrl.map((repo, index) => (
                                    <a
                                        key={index}
                                        href={repo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-black dark:hover:bg-gray-600 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                                    >
                                        <GithubIcon />
                                        {repo.label}
                                    </a>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

