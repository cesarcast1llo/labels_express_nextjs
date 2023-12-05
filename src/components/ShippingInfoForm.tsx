import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';

const ShippingInfoForm = () => {
    return (
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
    );
};

export default ShippingInfoForm;
