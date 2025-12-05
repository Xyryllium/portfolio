import type { ProjectProps } from "./types";

export const projects: ProjectProps[] = [
    {
        title: "Board Yet",
        description: "Multi-tenant Project Management Platform",
        technologies: ["PHP", "Laravel", "React", "TypeScript", "PostgreSQL", "Docker", "AWS"],
        image: "/img/projects/boardyet.webp",
        liveUrl: "https://boardyet.com",
        githubUrl: [
            { label: "Frontend", url: "https://github.com/Xyryllium/board-yet-ui" },
            { label: "Backend", url: "https://github.com/Xyryllium/board-yet" }
        ],
        featured: true,
    },
    {
        title: "Polymarket Bot",
        description: "Automated Trading & Wallet Monitoring Platform for Polymarket",
        technologies: ["Node.js", "Discord.js", "TypeScript", "Ethers.js", "Polymarket CLOB Client", "PM2", "AWS"],
        image: "/img/projects/polymarket-bot.webp",
        githubUrl:  "https://github.com/Xyryllium/polymarket-tracker-bot",
        featured: true,
    },
];

