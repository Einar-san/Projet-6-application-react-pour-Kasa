import React, { useEffect, useState, useCallback } from "react";

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    }, [images]);

    const goToNextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
    }, [images]);

    useEffect(() => {
        const imageTimer = setTimeout(goToNextSlide, 5000);
        return () => clearTimeout(imageTimer);
    }, [currentIndex, goToNextSlide]);

    const indicatorText = `${currentIndex + 1}/${images.length}`;

    const shouldShowNavigation = images.length > 1;

    return (
        <div className={"cover-article"}>
            <div className="carousel">
                {shouldShowNavigation && (
                    <>
                        <button className="left-carousel-btn" onClick={goToPreviousSlide}>
                            <img
                                src={process.env.PUBLIC_URL + "/CAROUSELARROWLEFT.SVG"}
                                alt="previous"
                            />
                        </button>
                        <button className="right-carousel-btn" onClick={goToNextSlide}>
                            <img
                                src={process.env.PUBLIC_URL + "/CAROUSELARROWRIGHT.svg"}
                                alt="next"
                            />
                        </button>
                        <div className="indicator">{indicatorText}</div>
                    </>
                )}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Carousel Slide"
                        className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}