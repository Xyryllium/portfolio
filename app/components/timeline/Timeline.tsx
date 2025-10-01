import { timelineData } from "~/data/timelineData";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col gap-4 items-center text-center mb-16">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 dark:from-blue-400 dark:via-purple-500 dark:to-teal-400 text-transparent bg-clip-text">
                    Timeline
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My professional journey and achievements
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-[11px] md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>


                <div className="space-y-8 md:space-y-12">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            {...item}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

