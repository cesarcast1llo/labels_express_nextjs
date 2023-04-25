import React from 'react';
import $ from '../../prices.json';

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
                        <p>{$.ups.tenToFourFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.fourSixSevenZero.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.sevenTenAbove.newPrice}</p>
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
                        <p>$21</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>$23</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>$25</p>
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
                        <p>$13</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>$15</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>$17</p>
                    </div>
                </div>
            </div>
            <div className="extras">
                <p style={{ fontSize: 16, lineHeight: '20px' }} dangerouslySetInnerHTML={{ __html: $.usps.extras[0] }} />
            </div>
        </div>
    );
};

export default UPS;
