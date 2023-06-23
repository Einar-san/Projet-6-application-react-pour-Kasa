import React, { useRef } from 'react';

export default function Accordion(props) {
    const contentRef = useRef(null);
    const { title, content} = props
    function toggleAccordion(event) {
        const accordion = event.currentTarget; //Always refer to the button
        const content = contentRef.current;    // Panel element (Accordion content)


        accordion.classList.toggle('open');
        content.style.maxHeight = accordion.classList.contains('open') ? content.scrollHeight + 'px' : '0';
    }

    return (
        <div className="about-element">
            <button className="accordion" onClick={toggleAccordion}>
                {title}
                <img className="accordion-arrow" src={process.env.PUBLIC_URL + '/DROPARROW.svg'} alt="Accordion Arrow"/>
            </button>
            <div className="panel accordion-content" ref={contentRef}>
                <p>{content}</p>
            </div>
        </div>
    );
}



