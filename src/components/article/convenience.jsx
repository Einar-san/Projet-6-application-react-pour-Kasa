import React, { useRef } from 'react';

export default function Convenience({article}) {
    const contentRef = useRef(null);
    const equipments = article.equipments.map((equipment, index) => (
            <ul className={"equipment"} key={index}>
                <li>{equipment}</li>
            </ul>
        )
    )
    function toggleAccordion(event) {
        const accordion = event.currentTarget; //Always refer to the button
        const content = contentRef.current;

        accordion.classList.toggle('open');
        content.style.maxHeight = accordion.classList.contains('open') ? content.scrollHeight + 'px' : '0';
    }

    return (
        <div className="description">
            <button className="accordion" onClick={toggleAccordion}>
                Equipments
                <img className="accordion-arrow" src={process.env.PUBLIC_URL + '/DROPARROW.svg'} alt="Accordion Arrow"/>
            </button>
            <div className="panel accordion-content" ref={contentRef}>
                {equipments}
            </div>
        </div>
    );
}