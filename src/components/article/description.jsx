import React, { useRef } from 'react';

export default function Description({article}) {
    const contentRef = useRef(null);

    function toggleAccordion(event) {
        const accordion = event.currentTarget; //Always refer to the button
        const content = contentRef.current;

        accordion.classList.toggle('open');
        content.style.maxHeight = accordion.classList.contains('open') ? content.scrollHeight + 'px' : '0';
    }

    return (
        <div className="description">
            <button className="accordion" onClick={toggleAccordion}>
                Description
                <img className="accordion-arrow" src={process.env.PUBLIC_URL + '/DROPARROW.svg'} alt="Accordion Arrow"/>
            </button>
            <div className="panel accordion-content" ref={contentRef}>
                <p>{article.description}</p>
            </div>
        </div>
    );
}
