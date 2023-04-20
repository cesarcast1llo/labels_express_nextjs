import React from 'react';
import PageSkeleton from '@/components/PageSkeleton';
import { useRouter } from 'next/router';

type PaymentProps = {
    amount: string;
    recipient: string;
};

const Payment: React.FC<PaymentProps> = ({ recipient }) => {
    const router = useRouter();
    const amount = router.query.amount as string;
    const venmoURL = `venmo://paycharge?txn=pay&recipients=cesar-castillo&amount=${amount}&note=Thank%20you!`;

    return (
        <PageSkeleton firstPage="Home" secondPage="FAQ">
            <h2>Venmo</h2>
            <input type="number" placeholder="Label Amount" name="receiver_phone" required />
            <a href={venmoURL} target="_blank">
                Send {amount} dollars to {recipient} via Venmo
            </a>
        </PageSkeleton>
    );
};

export default Payment;
