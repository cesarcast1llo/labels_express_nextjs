import React from 'react';
import PageSkeleton from '@/components/PageSkeleton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Venmo from '../assets/images/venmo.png';
import Cashapp from '../assets/images/cashapp.png';

type PaymentProps = {
    amount: string;
    recipient: string;
};

const Payment: React.FC<PaymentProps> = ({ recipient }) => {
    const router = useRouter();
    // const weight = '6';
    const weight = router.query.weight as string;
    const emailOrPhone = router.query.emailOrPhone;
    const ups = router.query.isToggled === 'true';
    const pageWidth = typeof document !== 'undefined' ? document.body.clientWidth : 0;
    let venmoURL;

    if (pageWidth > 600) {
        venmoURL = 'https://account.venmo.com/u/Cesar-Castillo';
    } else {
        venmoURL = `venmo://paycharge?txn=pay&recipients=cesar-castillo&amount=${weight}&note=thank%20you`;
    }
    const cashappURL = `https://cash.me/$cc332211/${weight}/`;

    return (
        <PageSkeleton firstPage="Home" secondPage="FAQ">
            <div className="paymentPage">
                <div className="flex">Drop down of prices</div>
                <div className="flex">
                    <div className="border">
                        <h2>Weight:</h2>
                        <input type="number" placeholder={`${weight}`} name="receiver_phone" required />
                    </div>
                </div>
                <div className="flex paymentType">
                    <div className="payments">
                        <a href={venmoURL} target="_blank">
                            <Image alt="Venmo" src={Venmo} style={{ width: 200, display: 'block', height: 'auto', margin: '0 auto' }} priority />
                            <p>@cesar-castillo</p>
                        </a>
                    </div>
                    <div className="payments">
                        <a href={cashappURL} target="_blank">
                            <Image alt="Cashapp" src={Cashapp} style={{ width: 65, display: 'block', height: 'auto', margin: '0 auto' }} priority />
                            <p className="cashapp">$cc332211</p>
                        </a>
                    </div>
                </div>
                <p>Once the payment is confirmed, I will deliver your label&nbsp;to:</p>
                <p>
                    <i>{emailOrPhone}</i>
                </p>
            </div>
        </PageSkeleton>
    );
};

export default Payment;
