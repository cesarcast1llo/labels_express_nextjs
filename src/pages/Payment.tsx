import React from 'react';
import Menu from '../components/Menu';

function Payment(): JSX.Element {
    return (
        <div className="App">
            <Menu firstPage={'/'} secondPage={'/FAQ'} />
            <div className="wrapper">Payment</div>
        </div>
    );
}

export default Payment;
