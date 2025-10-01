export interface TechCardProps {
    name: string;
    icon: React.ComponentType;
    bgColor: string;
}

export interface TechCategoryProps {
    title: string;
    titleGradient: string;
    technologies: TechCardProps[];
}

export interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string | { label: string; url: string }[];
    featured?: boolean;
}