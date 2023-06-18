import React, { useState } from 'react';
export default function Convenience ({article}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const equipments = article.equipments.map((equipment, index) => (
            <ul className={"equipment"} key={index}>
                <li>{equipment}</li>
            </ul>
        )
    )
    return (
        <div className={"Conveniences"}>
            <button
                className={`accordion ${isOpen ? 'open' : 'close'}`}
                onClick={toggleAccordion}
            >
                Equipments
                <img
                    className="accordion-arrow"
                    src={process.env.PUBLIC_URL + '/DROPARROW.svg'}
                    alt="Accordion Arrow"
                />
            </button>
            {isOpen && <div className={"panel shown"}>{equipments}</div>}
            {!isOpen && <div className={"panel unshown"}>{equipments}</div>}
        </div>
    );
}
