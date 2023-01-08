"use client"
import React, {useEffect, useState} from 'react';

const Slider = () => {
    // The array of images which is going to be used as the background image for the slider.
    const image: string = 'restaurant_menu_slide'

    // The state which keep data of the current image
    const [currentImage, setCurrentImage] = useState<number>(1)

    // The state for controlling the time for changing automatically the current slide.
    const [timer, SetTimer] = useState<number>(0);

    // The event handler for changing the current slide.
    const handleChangeSlider = (action: "next" | "prev") => {
        if (action === "next") {
            setCurrentImage(currentImage === 7 ? 1 : currentImage + 1)
        } else {
            setCurrentImage(currentImage === 1 ? 7 : currentImage - 1)
        }
    }

    // Timer for changing slide automatically
    useEffect(() => {
        const interval = setInterval(() => {
            handleChangeSlider("next")
        }, 5000)
        return () => clearInterval(interval);
    }, [currentImage])

    return (
        <div className="relative z-0">
            {/* The next and preview buttons */}
            <div className="flex gap-3 md:gap-5 p-3 md:p-5 w-16 md:w-32 absolute right-2 md:right-5 top-[45%]">
                <div onClick={e => handleChangeSlider("next")}
                     className="cursor-pointer text-amber-400 hover:text-amber-600
                transition delay-75 duration-150 hover:scale-110 ease-in-out hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
                    </svg>
                </div>

                <div onClick={e => handleChangeSlider("prev")}
                     className="cursor-pointer text-amber-400 hover:text-amber-600
                transition delay-75 duration-150 hover:scale-110 ease-in-out hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>

            </div>

            {/* The center box */}
                <div className="border-2 border-white z-6 w-32 h-32 md:w-72 md:h-72 absolute top-[20%] left-[35%] md:top-[25%] md:left-[40%]"></div>
                <div className="flex justify-center border-2 border-white z-7 w-32 h-32 md:w-72 md:h-72 rotate-45 absolute top-[20%] left-[35%] md:top-[25%] md:left-[40%]"></div>
                <div className="z-8 absolute top-[30%] left-[44%] md:top-[35%] md:left-[46%] lg:top-[33%] lg:left-[44.5%]">
                    <img src='logo.png' className="w-16 md:w-32" />
                    <h2 className="cursor-pointer hidden md:block mt-2 text-amber-400 hover:text-amber-600 transition delay-75 duration-300 scale-125 hover:-translate-y-1 font-boldItalic">{process.env.SITE_TITLE}</h2>
                </div>


            {/* left highlighters */}
            <div className="absolute left-3 md:left-5 top-[43%] grid grid-cols-1 grid-rows-7 gap-y-2">
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 1 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 2 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 3 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 4 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 5 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 6 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
                <div
                    className={`border border-amber-400 w-8 ${currentImage === 7 ? 'transition delay-75 duration-150 scale-125 ease-in-out translate-x-0.5 w-12 md:w-16' : ''}`}></div>
            </div>

            {/* Slider images */}
            <img src={`images/slider/${image}${currentImage}.jpg`}
                 className="bg-cover max-h-[60%] md:max-h-screen w-full z-0"
                 alt={process.env.SITE_TITLE}/>
        </div>
    );
};

export default Slider;
