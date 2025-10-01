import { GithubIcon, LinkedInIcon } from "./icons";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            icon: GithubIcon,
            url: "https://github.com/Xyryllium"
        },
        {
            name: "LinkedIn",
            icon: LinkedInIcon,
            url: "https://linkedin.com/in/xyryl-gyver-aranza"
        },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Xyryl Aranza
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Full Stack Developer passionate about building scalable web applications.
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        © {currentYear} Xyryl Aranza. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

