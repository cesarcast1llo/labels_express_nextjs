import React, { useState, useRef } from 'react';
import Contact from './Contact';

function Form(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contactForm = useRef<HTMLDivElement>(null);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    const handleToggle = (): void => {
        const content = contactForm.current;
        if (content) {
            if (isOpen) {
                content.style.transition = 'transform .5s ease-out';
                content.style.transform = 'scaleY(0)';
            } else {
                content.style.transition = 'transform 0.5s ease-out';
                content.style.transform = 'scaleY(1)';
            }
        }
        toggle();
    };

    return (
        <div className="labelWrap">
            <button className="toggleBtn" onClick={handleToggle}>
                Create Label
            </button>
            <div
                ref={contactForm}
                style={{
                    transformOrigin: 'top',
                    overflow: 'hidden',
                    transform: 'scaleY(0)',
                }}
            >
                {isOpen && <Contact />}
            </div>
        </div>
    );
}

export default Form;
