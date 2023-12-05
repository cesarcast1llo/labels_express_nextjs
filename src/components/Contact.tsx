import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import getPrice from '@/utils/priceWeights';
import ShipperDropDown from './ShipperDropDown';
import ShippingInfoForm from './ShippingInfoForm';

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

    const handleWeightInput = (event: Event) => {
        const weightInput = event.target as HTMLInputElement;
        const weight = parseInt(weightInput.value, 10);
        const { crossPrice, newPrice } = getPrice(weight);
        setCrossPrice(crossPrice);
        setPrice(newPrice);
    };

    // const handleWeightUnitsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setWeightUnits(event.target.value);
    // };

    // useEffect(() => {
    //     const weightInput = formRef.current?.elements.namedItem('weight') as HTMLInputElement;
    //     const weightElement = formRef.current?.elements.namedItem('weight');
    //     weightInput.addEventListener('input', handleWeightInput);

    //     const weightValue = weightElement && 'value' in weightElement ? weightElement.value : '0';
    //     const { crossPrice, newPrice } = getPrice(parseInt(weightValue, 10), isUPSLabel, weightUnits);
    //     setCrossPrice(crossPrice);
    //     setPrice(newPrice);

    //     return () => {
    //         weightInput.removeEventListener('input', handleWeightInput);
    //     };
    // }, [formRef, isUPSLabel, weightUnits]);

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
            <ShippingInfoForm />
            <ShipperDropDown />
            {/* <div className="labelContact weight">
                <div className="weightInput">
                    <label htmlFor="weight">
                        <p>Weight:</p>
                    </label>
                    <input type="number" name="weight" required value={weightUnits} onChange={handleWeightUnitsChange} />
                    <input type="number" name="weight" required />
                    <p>&nbsp;lbs</p>
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
            </div> */}
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
