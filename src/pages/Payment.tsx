import React from 'react';
import PageSkeleton from '@/components/PageSkeleton';

function Payment(): JSX.Element {
    return (
        <PageSkeleton firstPage="Home" secondPage="FAQ">
            Payment
        </PageSkeleton>
    );
}

export default Payment;
