import React from 'react';

const USPS = () => {
    return (
        <div className="usps">
            <div className="priorityMail">
                <div className="subhead">
                    <h2>
                        USPS Priority Mail<sup>®</sup>
                    </h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>1lbs-8lbs</p>
                    </div>
                    <div className="price">
                        <p>$5</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>9lbs-70lbs</p>
                    </div>
                    <div className="price">
                        <p>$10</p>
                    </div>
                </div>
            </div>
            <div className="prioritySignature">
                <div className="subhead">
                    <h2>
                        USPS Priority Signature Confirmation<sup>™</sup>
                    </h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>0lbs-8lbs</p>
                    </div>
                    <div className="price">
                        <p>$9</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>10lbs-30lbs</p>
                    </div>
                    <div className="price">
                        <p>$11</p>
                    </div>
                </div>
            </div>
            <div className="firstClass">
                <div className="subhead">
                    <h2>
                        USPS First Class&nbsp;Mail<sup>®</sup>
                    </h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>0 Oz - 15 Oz</p>
                    </div>
                    <div className="price">
                        <p>$3.5</p>
                    </div>
                </div>
            </div>
            <div className="extras">
                <div className="priceWrapper">
                    <div className="price">
                        <p style={{ fontSize: 16, lineHeight: '20px' }}>
                            USPS Priority Mail&nbsp;Express<sup>®</sup> Upon&nbsp;request
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default USPS;
