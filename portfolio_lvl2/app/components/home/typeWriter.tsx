import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typewriter: React.FC = () => {
    // Create a ref for the DOM element that Typed.js will attach to
    const typedElementRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Hello', 'Xin chào', 'Bonjour','Goedendag','こんにちは', '안녕하세요', 'привет',
                'สวัสดี', '你好', 'Cześć','مرحبا','নমস্কার','Здравейте','Hyvää päivää',
                'γεια σας','नमस्ते','שלום','नमस्ते','سلام','Grüß Gott'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };

        // Create a Typed instance and pass it the element and options
        const typed = new Typed(typedElementRef.current, options);

        // Cleanup function to destroy the Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            {/* Element that will display the typewriter effect */}
            <span id="element" ref={typedElementRef} className='text-3xl font-bold text-mintCream'></span>
        </div>
    );
};

export default Typewriter;
