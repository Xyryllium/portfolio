import { AwsIcon, AzureIcon, CSharpIcon, DockerIcon, GithubActionIcon, JavaScriptIcon, LaravelIcon, MySqlIcon, PhpIcon, PostgreSqlIcon, ReactIcon, SymfonyIcon, TailwindIcon, TypeScriptIcon } from "~/components/icons";

export const techStackData = {
    frontend: {
        title: "Frontend",
        titleGradient: "from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400",
        technologies: [
            {
                name: "JavaScript",
                icon: JavaScriptIcon,
                bgColor: "yellow",
            },
            {
                name: "React JS",
                icon: ReactIcon,
                bgColor: "blue",
            },
            {
                name: "TypeScript",
                icon: TypeScriptIcon,
                bgColor: "blue",
            },
            {
                name: "Tailwind CSS",
                icon: TailwindIcon,
                bgColor: "cyan",
            },
        ]
    },
    backend: {
        title: "Backend",
        titleGradient: "from-purple-700 to-red-700 dark:from-purple-400 dark:to-red-400",
        technologies: [
            {
                name: "PHP",
                icon: PhpIcon,
                bgColor: "purple",
            },
            {
                name: "Symfony",
                icon: SymfonyIcon,
                bgColor: "gray",
            },
            {
                name: "Laravel",
                icon: LaravelIcon,
                bgColor: "red",
            },
            {
                name: "C#",
                icon: CSharpIcon,
                bgColor: "purple",
            },
            {
                name: "MySQL",
                icon: MySqlIcon,
                bgColor: "orange",
            },
            {
                name: "PostgreSQL",
                icon: PostgreSqlIcon,
                bgColor: "blue",
            },
        ]
    },
    cloud: {
        title: "Devops & Cloud",
        titleGradient: "from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400",
        technologies: [
            {
                name: "Docker",
                icon: DockerIcon,
                bgColor: "blue",
            },
            {
                name: "AWS",
                icon: AwsIcon,
                bgColor: "orange",
            },
            {
                name: "Azure",
                icon: AzureIcon,
                bgColor: "blue",
            },
            {
                name: "Github Actions",
                icon: GithubActionIcon,
                bgColor: "blue",
            },

        ]
    }
}