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
                        <p>{$.usps.priority.oneToFifteen.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.priority.sixteenToFourteeFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.priority.fourteeSixToSeventee.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.priority.seventyOneAndUp.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">&nbsp;</div>
                    <div className="price">&nbsp;</div>
                </div>
            </div>
            <div className="groundAdv">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.usps.options[1] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.groundAdv.oneToFifteen.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.groundAdv.sixteenToFourteeFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.groundAdv.fourteeSixToSeventee.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.usps.groundAdv.seventyOneAndUp.newPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default USPS;
