import React, { useEffect, useRef } from 'react';

function ProjectsDisplay() {
    const images = [
        { src: '/images/tennisproject.jpg', link: 'https://tennis-locator.vercel.app/', description: 'Description 1' },
        { src: '/images/restaurantproject.jpg', link: 'https://quoctynoob.github.io/Me-s-restaurant/', description: 'Description 2' },
        { src: '/images/firebaseproject.jpg', link: 'https://quoctynoob.github.io/LearnWithFirebase/', description: 'Description 3' },
        { src: '/images/webproject.jpg', link: 'https://quoctynoob.github.io/LearnTheWebBasics/', description: 'Description 1' },
        // Add more images as needed
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += event.deltaY;
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className="relative">
            <button
                onClick={() => handleScroll('left')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center"
            >
                &#10094;
            </button>

            <div
                ref={scrollRef}
                className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex space-x-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for most browsers
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-1/2 snap-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 filter grayscale hover:filter-none"
                            />
                        </a>
                        <p className="text-center mt-2">{image.description}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => handleScroll('right')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center"
            >
                &#10095;
            </button>
        </div>
    );
}

export default ProjectsDisplay;
