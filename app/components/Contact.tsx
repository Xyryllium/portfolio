import { GithubIcon, LinkedInIcon, EmailIcon } from "./icons";

export function Contact() {
    const socialLinks = [
        {
            name: "GitHub",
            icon: GithubIcon,
            url: "https://github.com/Xyryllium",
            color: "hover:text-gray-900 dark:hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: LinkedInIcon,
            url: "https://linkedin.com/in/xyryl-gyver-aranza/",
            color: "hover:text-blue-600 dark:hover:text-blue-400"
        },
        {
            name: "Email",
            icon: EmailIcon,
            url: "mailto:xyaranzaaa@gmail.com",
            color: "hover:text-teal-600 dark:hover:text-teal-400"
        }
    ];

    return (
        <section className="py-12 sm:py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400">
                        Let's Connect
                    </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${social.color} text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700`}
                            aria-label={social.name}
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-500 dark:to-teal-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                        Ready to work together?
                    </h3>
                    <p className="text-white/90 mb-4 sm:mb-6 text-base sm:text-lg">
                        Drop me an email and let's start building something amazing!
                    </p>
                    <a
                        href="mailto:xyaranzaaa@gmail.com"
                        className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </section>
    );
}

