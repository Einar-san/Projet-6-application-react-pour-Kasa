import React, { useEffect, useState } from "react";

export default function CoverArticle({ article }) {
    return (
        <div className={"cover-article"}>
            <Carousel images={article.pictures} />
        </div>
    );
}

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            return newIndex;
        });
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            return newIndex;
        });
    };

    useEffect(() => {
        const imageTimer = setTimeout(goToNextSlide, 5000); // Automatically go to the next slide every 5 seconds
        return () => clearTimeout(imageTimer);
    }, [currentIndex]);

    const indicatorText = `${currentIndex + 1}/${images.length}`;

    const shouldShowNavigation = images.length > 1; // Check if there is more than one image
    const shouldShowIndicator = images.length > 1; // Check if there is more than one image

    return (
        <div className="carousel">
            {shouldShowNavigation && (
                <button className="left-carousel-btn" onClick={goToPreviousSlide}>
                    <img
                        src={process.env.PUBLIC_URL + "/CAROUSELARROWLEFT.SVG"}
                        alt="previous image"
                    />
                </button>
            )}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Carousel Slide"
                    className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                />
            ))}
            {shouldShowNavigation && (
                <button className="right-carousel-btn" onClick={goToNextSlide}>
                    <img
                        src={process.env.PUBLIC_URL + "/CAROUSELARROWRIGHT.svg"}
                        alt="next image"
                    />
                </button>
            )}
            {shouldShowIndicator && <div className="indicator">{indicatorText}</div>}
        </div>
    );
};