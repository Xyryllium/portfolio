import { DownloadIcon } from "./icons";

export function Introduction() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                <img src="/img/me.webp" alt="Xyryl Aranza" className="rounded-2xl w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl" />
            </div>
            <div className="flex justify-center">
                <div className="text-left max-w-lg">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400">Xyryl Aranza</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        {paragraphContent}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Get In Touch
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <DownloadIcon />
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const paragraphContent: string = 'I am a Full Stack Developer with 5+ years of experience building scalable, efficient web applications using PHP, Symfony, and modern development tools. Proven ability to collaborate in Agile environments, deliver high-impact solutions, and mentor team members. Passionate about clean code, automation, and system optimization.'