import type { Route } from "./+types/home";
import { Portfolio } from "../portfolio/portfolio";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Xyryl Aranza - Full Stack Developer | PHP, Laravel, React" },
    { name: "description", content: "Full Stack Developer with 5+ years of experience in PHP, Symfony, Laravel, React, and TypeScript. Building scalable web applications with modern technologies." },
    { name: "keywords", content: "Full Stack Developer, PHP Developer, Laravel, Symfony, React, TypeScript, Web Development, Software Engineer, Xyryl Aranza" },
    { name: "author", content: "Xyryl Aranza" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },

    { property: "og:title", content: "Xyryl Aranza - Full Stack Developer" },
    { property: "og:description", content: "Full Stack Developer specializing in PHP, Laravel, React, and modern web technologies. 5+ years of experience building scalable applications." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://xyrylaranza.dev" },
    { property: "og:image", content: "https://xyrylaranza.dev/img/me.webp" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Xyryl Aranza - Full Stack Developer" },
    { name: "twitter:description", content: "Full Stack Developer specializing in PHP, Laravel, React, and modern web technologies." },
    { name: "twitter:image", content: "https://xyrylaranza.dev/img/me.webp" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
