import React, { useState, useRef } from 'react';
import Contact from './Contact';

function Form(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contactFormRef = useRef<HTMLDivElement>(null);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    const handleToggle = (): void => {
        const contactForm = contactFormRef.current;

        if (contactForm) {
            if (isOpen) {
                contactForm.classList.add('sliderAnimationClose');
                contactForm.classList.remove('sliderAnimationOpen');
            } else {
                contactForm.classList.add('sliderAnimationOpen');
                contactForm.classList.remove('sliderAnimationClose');
            }
        }
        toggle();
    };

    return (
        <div className="labelWrap">
            <button className="toggleBtn" onClick={handleToggle}>
                Create Label
            </button>
            <div ref={contactFormRef} className="sliderAnimationClose">
                {isOpen && <Contact />}
            </div>
        </div>
    );
}

export default Form;
