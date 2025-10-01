import { BriefcaseIcon } from "~/components/icons/BriefcaseIcon";
import { GraduationCapIcon } from "~/components/icons/GraduationCapIcon";
import type { TimelineItem as TimelineItemType } from "~/data/timelineData";

interface TimelineItemProps extends TimelineItemType {
    position: 'left' | 'right';
}

export function TimelineItem({ title, organization, date, type, position, credentialUrl }: TimelineItemProps) {
    const Icon = type === 'education' || type === 'training' ? GraduationCapIcon : BriefcaseIcon;

    return (
        <div className={`flex items-start gap-4 md:gap-8 w-full ${position === 'left' ? 'md:flex-row md:items-center' : 'md:flex-row-reverse md:items-center'}`}>
            <div className={`relative flex flex-col items-center justify-center shrink-0 w-[24px] md:w-auto ${position === 'left' ? 'md:order-2' : 'md:order-2'}`}>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-400 dark:bg-gray-600 border-2 md:border-4 border-gray-50 dark:border-gray-950 z-10"></div>
            </div>

            <div className={`flex-1 text-left ${position === 'left' ? 'md:text-right md:order-1' : 'md:text-left md:order-1'}`}>
                <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 rounded-lg p-4 md:p-6 hover:bg-gray-200 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-start gap-3 md:gap-4 ${position === 'left' ? 'md:flex-row-reverse' : ''}`}>
                        <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-2 md:p-3 rounded-lg shrink-0">
                            <Icon />
                        </div>
                        <div className={`text-left ${position === 'left' ? 'md:text-right' : 'md:text-left'} flex-1`}>
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">{organization}</p>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mb-3">{date}</p>
                            {credentialUrl && (
                                <a
                                    href={credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                    View Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`hidden md:block flex-1 ${position === 'left' ? 'md:order-3' : 'md:order-3'}`}></div>
        </div>
    );
}

