import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import AutoCompleteInput from './AutoCompleteInput';

const Contact = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [price, setPrice] = useState('$0');
    const [crossPrice, setcrossPrice] = useState('');
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

    useEffect(() => {
        const weightInput = form.current?.elements.namedItem('weight') as HTMLInputElement;

        function handleWeightInput() {
            const weight = parseInt(weightInput.value, 10);
            let newPrice = '0';
            let crossPrice = '';
            if (weight >= 1 && weight <= 8) {
                crossPrice = `<s>$11</s>`;
                newPrice = `$5`;
            } else if (weight >= 9 && weight <= 70) {
                crossPrice = `<s>$22</s>`;
                newPrice = `$10`;
            }
            setcrossPrice(crossPrice);
            setPrice(newPrice);
        }

        weightInput.addEventListener('input', handleWeightInput);

        return () => {
            weightInput.removeEventListener('input', handleWeightInput);
        };
    }, [form]);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const weightInput = form.current?.elements.namedItem('weight') as HTMLInputElement;
        const emailOrPhoneInput = form.current?.elements.namedItem('emailOrPhone') as HTMLInputElement;
        const priceInput = document.getElementById('price') as HTMLParagraphElement;
        const weight = weightInput.value;
        const emailOrPhone = emailOrPhoneInput.value;
        const pricePayment = priceInput.textContent;

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, form.current!, process.env.REACT_APP_EMAILJS_PUBLIC_KEY!).then(
            (result) => {
                console.log(result.text);
                router.push({
                    pathname: '/Payment',
                    query: { weight: weight, emailOrPhone: emailOrPhone, isToggled: isToggled, pricePayment: pricePayment },
                });
            },
            (error) => {
                console.log(error.text);
            }
        );

        console.log(pricePayment);

        event.currentTarget.reset();
    };

    console.log(price);

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            {/* <div className="labelInfo">
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
            </div> */}
            <div className="labelContact weight">
                <div className="weightInput">
                    <label htmlFor="weight">
                        <p>Weight:</p>
                    </label>
                    <input type="number" name="weight" placeholder="Whole numbers" required />
                    <p className="lbs">lbs</p>
                </div>
                <div className="weightInput">
                    <label htmlFor="price">
                        <p>Price:</p>
                    </label>
                    <p dangerouslySetInnerHTML={{ __html: crossPrice }}></p>
                    <p id="price" dangerouslySetInnerHTML={{ __html: price }}></p>
                </div>
            </div>
            <div className="labelContact">
                <label htmlFor="email">
                    <p>Provide email or phone number to&nbsp;deliver&nbsp;label:</p>
                </label>
                <input type="text" name="emailOrPhone" placeholder="Email or Phone Number" required />
            </div>
            <button className="toggleBtn" type="submit">
                Send Label Details
            </button>
        </form>
    );
};

export default Contact;
