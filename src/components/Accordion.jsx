import React, { useState } from 'react';
export default function Accordion (props) {
    const [isOpen, setIsOpen] = useState(false);
    const { title, content} = props
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const arrowRotation = isOpen ? '180deg' : '0';
    return (
        <div className={"about-element"}>
            <button
                className={`accordion ${isOpen ? 'open' : 'close'}`}
                onClick={toggleAccordion}
            >
                {title}
                <img
                    className="accordion-arrow"
                    src={process.env.PUBLIC_URL + '/DROPARROW.svg'}
                    alt="Accordion Arrow"
                />
            </button>

            {isOpen && <div className={"panel shown"}>{content}</div>}
            {!isOpen && <div className={"panel unshown"}>{content}</div>}
        </div>
    );
}
