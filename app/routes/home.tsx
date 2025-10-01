import type { Route } from "./+types/home";
import { Portfolio } from "../portfolio/portfolio";

export const links: Route.LinksFunction = () => [
  { rel: "preload", href: "/img/me-original.webp", as: "image", type: "image/webp" },
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Xyryl Aranza - Full Stack Developer | PHP, Laravel, React" },
    { name: "description", content: "Full Stack Developer with 5+ years of experience in PHP, Symfony, Laravel, React, and TypeScript. Building scalable web applications with modern technologies." },
    { name: "keywords", content: "Full Stack Developer, PHP Developer, Laravel, Symfony, React, TypeScript, Web Development, Software Engineer, Xyryl Aranza" },
    { name: "author", content: "Xyryl Aranza" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },

    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://xyrylaranza.dev" },
    { property: "og:title", content: "Xyryl Aranza - Full Stack Developer" },
    { property: "og:description", content: "Full Stack Developer specializing in PHP, Laravel, React, and modern web technologies. 5+ years of experience building scalable applications." },
    { property: "og:image", content: "https://xyrylaranza.dev/img/og-image.webp" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Xyryl Aranza - Full Stack Developer" },
    { property: "og:image:type", content: "image/webp" },
    { property: "og:site_name", content: "Xyryl Aranza Portfolio" },
    { property: "og:locale", content: "en_US" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://xyrylaranza.dev" },
    { name: "twitter:title", content: "Xyryl Aranza - Full Stack Developer" },
    { name: "twitter:description", content: "Full Stack Developer specializing in PHP, Laravel, React, and modern web technologies." },
    { name: "twitter:image", content: "https://xyrylaranza.dev/img/og-image.webp" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
