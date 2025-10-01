import type { TechCategoryProps } from "~/data/types";
import { TechCard } from "./TechCard";
export function TechCategory({ title, titleGradient, technologies }: TechCategoryProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="text-left w-full lg:w-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    <span className={`bg-gradient-to-r ${titleGradient} text-transparent bg-clip-text`}>
                        {title}
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
                {technologies.map((tech, index) => (
                    <TechCard key={index} {...tech} />
                ))}
            </div>
        </div>
    )
}