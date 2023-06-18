import React, { useState } from 'react';
export default function Description ({article}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={"description"}>
            <button
                className={`accordion ${isOpen ? 'open' : 'close'}`}
                onClick={toggleAccordion}
            >
                Description
                <img
                    className="accordion-arrow"
                    src={process.env.PUBLIC_URL + '/DROPARROW.svg'}
                    alt="Accordion Arrow"
                />
            </button>
            {isOpen && <div className={"panel shown"}>{article.description}</div>}
            {!isOpen && <div className={"panel unshown"}>{article.description}</div>}
        </div>
    );
}


