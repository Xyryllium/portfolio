import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "~/components/ui/carousel";
import { techStackData } from "~/data/techStackData";
import { TechCategory } from "./TechCategory";
export function TechStack() {
    const categories = Object.values(techStackData);

    return (
        <div className="flex flex-col gap-16 items-center text-center">
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 dark:from-blue-400 dark:via-purple-500 dark:to-teal-400 text-transparent bg-clip-text">
                    Tech Stack
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Technologies and tools I use to build modern, scalable applications
                </p>
            </div>
            <div className="w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>

                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                            stopOnFocusIn: false,
                        })
                    ]}
                    className="w-full"
                >
                    <CarouselContent>
                        {categories.map((category, index) => (
                            <CarouselItem key={index} className="py-4 px-4">
                                <TechCategory {...category} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselDots />
                </Carousel>
            </div>
        </div>
    )
}