import React, { useRef } from 'react';

export default function Accordion(props) {
    const contentRef = useRef(null);
    const { title, content, classElement } = props;

    function toggleAccordion(event) {
        const accordion = event.currentTarget; // Always refer to the button
        const content = contentRef.current; // Panel element (Accordion content)

        accordion.classList.toggle('open');
        content.style.maxHeight = accordion.classList.contains('open')
            ? content.scrollHeight + 'px'
            : '0';
    }

    return (
        <div className={classElement}>
            <button className="accordion" onClick={toggleAccordion}>
                {title}
                <img
                    className="accordion-arrow"
                    src={process.env.PUBLIC_URL + '/DROPARROW.svg'}
                    alt="Accordion Arrow"
                />
            </button>
            <div className="panel accordion-content" ref={contentRef}>
                {Array.isArray(content) ? (
                    <ul className={"equipment"}>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}



