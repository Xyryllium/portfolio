import type { TechCardProps } from "~/data/types";

const colorVariants = {
    yellow: {
        shadow: "hover:shadow-yellow-500/20",
        border: "hover:border-yellow-400/60",
        iconBg: "from-yellow-400/20 to-yellow-500/30 group-hover:from-yellow-400/40 group-hover:to-yellow-500/50",
        textColor: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
    },
    blue: {
        shadow: "hover:shadow-blue-500/20",
        border: "hover:border-blue-400/60",
        iconBg: "from-blue-400/20 to-blue-500/30 group-hover:from-blue-400/40 group-hover:to-blue-500/50",
        textColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400"
    },
    cyan: {
        shadow: "hover:shadow-cyan-500/20",
        border: "hover:border-cyan-400/60",
        iconBg: "from-cyan-400/20 to-cyan-500/30 group-hover:from-cyan-400/40 group-hover:to-cyan-500/50",
        textColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
    },
    purple: {
        shadow: "hover:shadow-purple-500/20",
        border: "hover:border-purple-400/60",
        iconBg: "from-purple-400/20 to-purple-500/30 group-hover:from-purple-400/40 group-hover:to-purple-500/50",
        textColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400"
    },
    gray: {
        shadow: "hover:shadow-gray-500/20",
        border: "hover:border-gray-400/60",
        iconBg: "from-gray-400/20 to-gray-500/30 group-hover:from-gray-400/40 group-hover:to-gray-500/50",
        textColor: "group-hover:text-gray-700 dark:group-hover:text-gray-300"
    },
    red: {
        shadow: "hover:shadow-red-500/20",
        border: "hover:border-red-400/60",
        iconBg: "from-red-400/20 to-red-500/30 group-hover:from-red-400/40 group-hover:to-red-500/50",
        textColor: "group-hover:text-red-600 dark:group-hover:text-red-400"
    },
    orange: {
        shadow: "hover:shadow-orange-500/20",
        border: "hover:border-orange-400/60",
        iconBg: "from-orange-400/20 to-orange-500/30 group-hover:from-orange-400/40 group-hover:to-orange-500/50",
        textColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400"
    }
} as const;

export function TechCard({ name, icon: Icon, bgColor }: TechCardProps) {
    const colors = colorVariants[bgColor as keyof typeof colorVariants] || colorVariants.blue;

    return (
        <div
            className={`group flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-200/80 to-gray-300/80 dark:from-gray-800/80 dark:to-gray-900/80 hover:from-gray-300/90 hover:to-gray-400/90 dark:hover:from-gray-700/90 dark:hover:to-gray-800/90 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${colors.shadow} border border-gray-400/50 dark:border-gray-600/50 ${colors.border} backdrop-blur-sm cursor-pointer`}
        >
            <div className={`mb-6 p-6 rounded-full bg-gradient-to-br ${colors.iconBg} transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
                <Icon />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${colors.textColor} transition-all duration-500 transform group-hover:scale-105`}>
                {name}
            </h3>
        </div>
    )
};