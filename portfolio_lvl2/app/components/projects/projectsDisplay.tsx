import React, { useEffect, useRef } from 'react';

function ProjectsDisplay() {
    const images = [
        { src: '/images/tennisproject.jpg', link: 'https://tennis-locator.vercel.app/', 
            description: 'Tennis Locator' },
        { src: '/images/restaurantproject.jpg', link: 'https://quoctynoob.github.io/Me-s-restaurant/', 
            description: 'Responsive restaurant menu' },
        { src: '/images/firebaseproject.jpg', link: 'https://quoctynoob.github.io/LearnWithFirebase/', 
            description: 'Todo-list' },
        { src: '/images/webproject.jpg', link: 'https://quoctynoob.github.io/LearnTheWebBasics/', 
            description: 'Jokes and Weather API' },
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
        <div className="relative flex items-center">
            <button
                onClick={() => handleScroll('left')}
                className="z-10 w-12 h-12 rounded-full text-white flex items-center justify-center mr-4"
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
                        className="flex-shrink-0 w-1/2 snap-center overflow-hidden"
                    >
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 filter grayscale hover:filter-none transform transition-transform duration-300 hover:scale-110"
                            />
                        </a>
                        <p className="text-center mt-2">{image.description}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => handleScroll('right')}
                className="z-10 w-12 h-12 rounded-full text-white flex items-center justify-center ml-4"
            >
                &#10095;
            </button>
        </div>
    );
}

export default ProjectsDisplay;
