import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import AutoCompleteInput from './AutoCompleteInput';
import getPrice from '@/utils/priceWeights';

const Contact = () => {
    const [isUPS, setIsUPS] = useState(false);
    const [price, setPrice] = useState('$0');
    const [crossPrice, setcrossPrice] = useState('');
    const upsCheck = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggle = () => {
        setIsUPS(!isUPS);
    };

    const handleToggle = () => {
        const content = upsCheck.current;

        if (content !== null) {
            const element = content as HTMLElement;

            if (isUPS) {
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
            const { crossPrice, newPrice } = getPrice(weight, isUPS);
            setcrossPrice(crossPrice);
            setPrice(newPrice);
        }

        weightInput.addEventListener('input', handleWeightInput);

        return () => {
            weightInput.removeEventListener('input', handleWeightInput);
        };
    }, [isUPS]);

    useEffect(() => {
        const weightElement = form.current?.elements.namedItem('weight');
        const weightValue = weightElement && 'value' in weightElement ? weightElement.value : '0';
        const { newPrice } = getPrice(parseInt(weightValue, 10), isUPS);
        setPrice(newPrice);
    }, [isUPS]);

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
                    query: { weight: `${weight} lbs`, emailOrPhone: emailOrPhone, isUPS: isUPS, pricePayment: pricePayment },
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
            </div>*/}
            <div className="upsOrUsps">
                <label htmlFor="checkbox" className="upsLabel">
                    <p>Is this a UPS label?</p>
                </label>
                <input type="checkbox" className="upsCheckbox" name="checkbox" checked={isUPS} onChange={handleToggle} />
                <div
                    ref={upsCheck}
                    style={{
                        transformOrigin: 'top',
                        overflow: 'hidden',
                        transform: 'scaleY(0)',
                    }}
                >
                    {isUPS && (
                        <div className="toggleClass">
                            <label htmlFor="ups_dimensions" className="upsDimensionsLabel">
                                <p>Add dimensions below:</p>
                            </label>
                            <div className="upsLabelDimensions">
                                <div>
                                    <p>
                                        H:
                                        <input type="text" name="ups_dimensions" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        W:
                                        <input type="text" name="ups_dimensions" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        L:
                                        <input type="text" name="ups_dimensions" className="upsInput" required />″
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
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
