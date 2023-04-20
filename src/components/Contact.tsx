import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import AutoCompleteInput from './AutoCompleteInput';

const Contact = () => {
    const [isToggled, setIsToggled] = useState(false);
    const upsCheck = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggle = () => {
        setIsToggled(!isToggled);
    };

    const handleToggle = () => {
        const content = upsCheck.current;

        if (content !== null) {
            const element = content as HTMLElement;

            if (isToggled) {
                element.style.transition = 'transform .5s ease-out';
                element.style.transform = 'scaleY(0)';
            } else {
                element.style.transition = 'transform 0.5s ease-out';
                element.style.transform = 'scaleY(1)';
            }
        }

        toggle();
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const weightInput = form.current?.elements.namedItem('weight') as HTMLInputElement;
        const weight = weightInput.value;

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, form.current!, process.env.REACT_APP_EMAILJS_PUBLIC_KEY!).then(
            (result) => {
                console.log(result.text);
                router.push({
                    pathname: '/Payment',
                    query: { amount: weight },
                });
            },
            (error) => {
                console.log(error.text);
            }
        );

        event.currentTarget.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <div className="labelInfo">
                <div className="sender">
                    <label htmlFor="sender_name">
                        <p>
                            Sender <br className="show-sm" />
                            Name:
                        </p>
                    </label>
                    <input type="text" placeholder="Sender Name" name="sender_name" required />
                    <label htmlFor="sender_address">
                        <p>Address:</p>
                    </label>
                    <AutoCompleteInput placeholder="Sender Address" name="sender_address" />
                    <label htmlFor="sender_phone">
                        <p>Phone:</p>
                    </label>
                    <input type="number" placeholder="Sender Phone" name="sender_phone" required />
                </div>
                <div className="receiver">
                    <label htmlFor="receiver_name">
                        <p>
                            Receiver <br className="show-sm" />
                            Name:
                        </p>
                    </label>
                    <input type="text" placeholder="Receiver Name" name="receiver_name" required />
                    <label htmlFor="receiver_address">
                        <p>Address:</p>
                    </label>
                    <AutoCompleteInput placeholder="Receiver Address" name="receiver_address" />
                    <label htmlFor="receiver_phone">
                        <p>Phone:</p>
                    </label>
                    <input type="number" placeholder="Receiver Phone" name="receiver_phone" required />
                </div>
            </div>
            <div className="upsOrUsps">
                <label htmlFor="checkbox" className="upsLabel">
                    <p>Is this a UPS label?</p>
                </label>
                <input type="checkbox" className="upsCheckbox" name="checkbox" checked={isToggled} onChange={handleToggle} />
                <div
                    ref={upsCheck}
                    style={{
                        transformOrigin: 'top',
                        overflow: 'hidden',
                        transform: 'scaleY(0)',
                    }}
                >
                    {isToggled && (
                        <div className="upsLabelDimensions">
                            <label htmlFor="ups_dimensions" className="upsDimensionsLabel">
                                <p>Add dimensions below:</p>
                            </label>
                            <input type="text" placeholder="Label dimensions" name="ups_dimensions" className="upsInput" />
                        </div>
                    )}
                </div>
            </div>
            <div className="labelContact">
                <label htmlFor="email">
                    <p>Weight:</p>
                </label>
                <input type="text" name="weight" className="emailContactInput" placeholder="Weight in pounds" required />
                <label htmlFor="email">
                    <p>Provide email or phone number to&nbsp;deliver&nbsp;label:</p>
                </label>
                <input type="text" name="emailOrPhone" className="emailContactInput" placeholder="Email or Phone Number" required />
            </div>
            <button className="toggleBtn" type="submit">
                Send Label Details
            </button>
        </form>
    );
};

export default Contact;
