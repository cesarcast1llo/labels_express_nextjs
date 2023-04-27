import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import AutoCompleteInput from './AutoCompleteInput';
import getPrice from '@/utils/priceWeights';

const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

const Contact = () => {
    const [isUPSLabel, setIsUPSLabel] = useState(false);
    const [weightUnits, setWeightUnits] = useState('lbs');
    const [price, setPrice] = useState('$0');
    const [crossPrice, setCrossPrice] = useState('');
    const upsCheckRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const actualDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const timeString = `${displayHours}:${minutes} ${ampm} on ${actualDate}`;

    const toggleUPS = () => {
        setIsUPSLabel((isUPSLabel) => !isUPSLabel);
    };

    const openUPS = () => {
        const upsSliderDiv = upsCheckRef.current;

        if (upsSliderDiv !== null) {
            if (isUPSLabel) {
                upsSliderDiv.classList.add('upsAnimationClose');
                upsSliderDiv.classList.remove('upsAnimationOpen');
            } else {
                upsSliderDiv.classList.add('upsAnimationOpen');
                upsSliderDiv.classList.remove('upsAnimationClose');
            }
        }

        toggleUPS();
    };

    const handleWeightInput = (event: Event) => {
        const weightInput = event.target as HTMLInputElement;
        const weight = parseInt(weightInput.value, 10);
        const { crossPrice, newPrice } = getPrice(weight, isUPSLabel, weightUnits);
        setCrossPrice(crossPrice);
        setPrice(newPrice);
    };

    const handleWeightUnitsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWeightUnits(event.target.value);
    };

    useEffect(() => {
        const weightInput = formRef.current?.elements.namedItem('weight') as HTMLInputElement;
        weightInput.addEventListener('input', handleWeightInput);

        return () => {
            weightInput.removeEventListener('input', handleWeightInput);
        };
    }, [isUPSLabel, weightUnits]);

    useEffect(() => {
        const weightElement = formRef.current?.elements.namedItem('weight');
        const weightValue = weightElement && 'value' in weightElement ? weightElement.value : '0';
        const { crossPrice, newPrice } = getPrice(parseInt(weightValue, 10), isUPSLabel, weightUnits);
        setCrossPrice(crossPrice);
        setPrice(newPrice);
    }, [isUPSLabel, weightUnits]);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const weightInput = formRef.current?.elements.namedItem('weight') as HTMLInputElement;
        const emailInput = formRef.current?.elements.namedItem('email') as HTMLInputElement;
        const pricePayment = document.getElementById('priceSentEmailjs')?.textContent;
        const weight = weightInput?.value || '0';
        const email = emailInput?.value || '';

        emailjs.sendForm(emailjsServiceId, emailjsTemplateId, formRef.current!, emailjsPublicKey).then(
            (result) => {
                console.log(result.text);
                router.push({
                    pathname: '/Payment',
                    query: { weight: `${weight} ${weightUnits}`, email: email, isUPSLabel: isUPSLabel, pricePayment: pricePayment, price: price },
                });
            },
            (error) => {
                console.log(error.text);
            }
        );

        event.currentTarget.reset();
    };

    if (formRef.current) {
        const priceInput = document.getElementById('priceSentEmailjs') as HTMLParagraphElement;
        const pricePayment = priceInput.textContent;
        const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
        textarea.value = `${pricePayment}`;
    }
    if (formRef.current) {
        const timeStampInput = document.getElementById('timeStampSentEmailjs') as HTMLParagraphElement;
        const timeStampString = timeStampInput.textContent;
        const textAreaTimeStamp = document.getElementById('timeStampTextArea') as HTMLTextAreaElement;
        textAreaTimeStamp.value = `${timeStampString}`;
    }

    return (
        <form ref={formRef} onSubmit={sendEmail} className="form">
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
                        <p>Address Line 1:</p>
                    </label>
                    <AutoCompleteInput placeholder="Sender Address 1" name="sender_address" />
                    <label htmlFor="sender_address2">
                        <p>Address Line 2:</p>
                    </label>
                    <input type="text" placeholder="Sender Address 2" name="sender_address2" />
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
                        <p>Address Line 1:</p>
                    </label>
                    <AutoCompleteInput placeholder="Receiver Address 1" name="receiver_address" />
                    <label htmlFor="receiver_address2">
                        <p>Address Line 2:</p>
                    </label>
                    <input type="text" placeholder="Receiver Address 2" name="receiver_address2" />
                    <label htmlFor="receiver_phone">
                        <p>Phone:</p>
                    </label>
                    <input type="number" placeholder="Receiver Phone" name="receiver_phone" required />
                </div>
            </div>
            <div className="upsOrUsps">
                <div className="checkBox">
                    <div>
                        <label htmlFor="checkbox" className="upsLabel">
                            <p>USPS Label?</p>
                        </label>
                        <input type="checkbox" className="upsCheckbox" name="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="checkbox" className="upsLabel">
                            <p>UPS label?</p>
                        </label>
                        <input type="checkbox" className="upsCheckbox" name="checkbox" checked={isUPSLabel} onChange={openUPS} />
                    </div>
                </div>
                <div ref={upsCheckRef} className="upsAnimationClose">
                    {isUPSLabel && (
                        <div className="toggleClass">
                            <label htmlFor="ups_dimensions" className="upsDimensionsLabel">
                                <p>Add dimensions below:</p>
                            </label>
                            <div className="upsLabelDimensions">
                                <div>
                                    <p>
                                        H:
                                        <input type="text" name="height" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        W:
                                        <input type="text" name="width" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        L:
                                        <input type="text" name="length" className="upsInput" required />″
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
                    <input type="number" name="weight" required />
                    <select name="weightType" id="weightType" value={weightUnits} onChange={handleWeightUnitsChange}>
                        <option value="lbs" className="lbs">
                            lbs
                        </option>
                        <option value="oz" className="lbs" disabled={isUPSLabel}>
                            oz
                        </option>
                    </select>
                </div>
                <div className="weightInput">
                    <label htmlFor="price">
                        <p>Price:</p>
                    </label>
                    <p dangerouslySetInnerHTML={{ __html: crossPrice }} />
                    <p id="priceSentEmailjs" dangerouslySetInnerHTML={{ __html: price }} />
                    <textarea name="price" />
                    <p id="timeStampSentEmailjs" dangerouslySetInnerHTML={{ __html: timeString }} />
                    <textarea id="timeStampTextArea" name="timestamp" />
                </div>
            </div>
            <div className="labelContact">
                <label htmlFor="email">
                    <p>Provide email to&nbsp;deliver&nbsp;label:</p>
                </label>
                <input type="text" name="email" placeholder="Email" required />
            </div>
            <button className="toggleBtn" type="submit">
                Send Label Details
            </button>
        </form>
    );
};

export default Contact;
