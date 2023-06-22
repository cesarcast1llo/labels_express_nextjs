import React from 'react';
import $ from '../../../prices.json';

const USPS = () => {
    return (
        <div className="usps">
            <div className="priorityMail">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.usps.options[0] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.oneToEight.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.nineToThirty.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.threeOneFifty.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.fiftyOneSeventy.newPrice}</p>
                    </div>
                </div>
            </div>
            <div className="prioritySignature">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.usps.options[1] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>$9</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>$12</p>
                    </div>
                </div>
            </div>
            <div className="firstClass">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.usps.options[2] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>0 Oz - 15 Oz</p>
                    </div>
                    <div className="price">
                        <p>$5</p>
                    </div>
                </div>
            </div>
            <div className="extras">
                <p style={{ fontSize: 16, lineHeight: '20px' }} dangerouslySetInnerHTML={{ __html: $.usps.extras[0] }} />
            </div>
        </div>
    );
};

export default USPS;
