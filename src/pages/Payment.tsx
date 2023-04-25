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

    const weight = router.query.weight ?? '';
    const price = router.query.pricePayment ?? '';
    const emailOrPhone = router.query.emailOrPhone;
    const pageWidth = typeof document !== 'undefined' ? document.body.clientWidth : 0;
    let venmoURL;

    const priceNoSign = price.slice(1);

    if (pageWidth > 600) {
        venmoURL = 'https://account.venmo.com/u/Cesar-Castillo';
    } else {
        venmoURL = `venmo://paycharge?txn=pay&recipients=cesar-castillo&amount=${priceNoSign}&note=thank%20you`;
    }

    const cashappURL = `https://cash.me/$cc332211/${priceNoSign}/`;

    return (
        <PageSkeleton firstPage="Home" secondPage="FAQ">
            <div className="paymentPage">
                {/* <div className="flex">Drop down of prices</div> */}
                <div className="paymentType mobBorder">
                    <div className="totalPrice">
                        <h2>Weight:</h2>
                        <p>{weight}</p>
                    </div>
                    <div className="totalPrice">
                        <h2>Price:</h2>
                        <p dangerouslySetInnerHTML={{ __html: price }}></p>
                    </div>
                </div>

                <div className="paymentType">
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
                <div className="contactMe">
                    <a href="sms:5109454950">
                        <p>
                            Questions? Text: <span>510-945-4950</span>
                        </p>
                    </a>
                </div>
            </div>
        </PageSkeleton>
    );
};

export default Payment;
