import React from 'react';
import PageSkeleton from '@/components/PageSkeleton';

type PaymentProps = {
    amount: string;
    recipient: string;
};

const Payment: React.FC<PaymentProps> = ({ amount, recipient }) => {
    const venmoURL = `venmo://paycharge?txn=pay&recipients=cesar-castillo&amount=${amount}&note=Thank%20you!`;

    return (
        <PageSkeleton firstPage="Home" secondPage="FAQ">
            <div className="paymentPage">
                <a href={'https://account.venmo.com/u/Cesar-Castillo'}>
                    <h2>Venmo</h2>
                </a>
                {/* <input type="number" placeholder="Label Amount" name="receiver_phone" required /> */}
                {/* <a href={venmoURL} target="_blank">
                    Send {amount} dollars to {recipient} via Venmo
                </a> */}
            </div>
        </PageSkeleton>
    );
};

export default Payment;
