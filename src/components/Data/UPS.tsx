import React from 'react';
import $ from '../../../prices.json';

const UPS = () => {
    return (
        <div className="ups">
            <div className="upsGround">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.ups.options[0] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.ground.oneToFifteen.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.ground.sixteenToFourteeFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.ground.fourteeSixToSeventee.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.ground.seventyOneAndUp.newPrice}</p>
                    </div>
                </div>
            </div>
            <div className="upsNextDay">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.ups.options[1] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.threeDay.oneToFifteen.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.threeDay.sixteenToFourteeFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.threeDay.fourteeSixToSeventee.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.threeDay.seventyOneAndUp.newPrice}</p>
                    </div>
                </div>
            </div>
            <div className="upsSecondDay">
                <div className="subhead">
                    <h2 dangerouslySetInnerHTML={{ __html: $.ups.options[2] }} />
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[0]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.twoDay.oneToFifteen.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[1]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.twoDay.sixteenToFourteeFive.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[2]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.twoDay.fourteeSixToSeventee.newPrice}</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>{$.weights[3]}</p>
                    </div>
                    <div className="price">
                        <p>{$.ups.twoDay.seventyOneAndUp.newPrice}</p>
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
