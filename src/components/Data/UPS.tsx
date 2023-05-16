import React from 'react';
import $ from '../../../prices.json';

const UPS = () => {
    return (
        <div className="ups">
            <div className="upsGround">
                <div className="subhead">
                    <h2>UPS Ground</h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.oneToEight.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.nineToThirty.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.threeOneFifty.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.fiftyOneSeventy.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[4]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.seventyOneTwoOne.newPrice}</p>
                    </div>
                </div>
            </div>
            <div className="upsNextDay">
                <div className="subhead">
                    <h2>UPS Next Day Air</h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>$18</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>$20</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>$22</p>
                    </div>
                </div>
            </div>
            <div className="upsSecondDay">
                <div className="subhead">
                    <h2>UPS 2nd Day Air</h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>$10</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>$11</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>$12</p>
                    </div>
                </div>
            </div>
            <div className="extras">
                <p style={{ fontSize: 16, lineHeight: '20px' }} dangerouslySetInnerHTML={{ __html: $.ups.extras[0] }} />
            </div>
        </div>
    );
};

export default UPS;
