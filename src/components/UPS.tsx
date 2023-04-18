import React from 'react';

const UPS = () => {
    return (
        <div className="ups">
            <div className="upsGround">
                <div className="subhead">
                    <h2>UPS Ground</h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>0-15lbs</p>
                    </div>
                    <div className="price">
                        <p>$8</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>15lbs-60lbs</p>
                    </div>
                    <div className="price">
                        <p>$9</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>60lbs-120lbs</p>
                    </div>
                    <div className="price">
                        <p>$11</p>
                    </div>
                </div>
            </div>
            <div className="upsNextDay">
                <div className="subhead">
                    <h2>UPS Next Day Air</h2>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>0-15lbs</p>
                    </div>
                    <div className="price">
                        <p>$21</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>15lbs-60lbs</p>
                    </div>
                    <div className="price">
                        <p>$23</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>60lbs-120lbs</p>
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
                        <p>0-15lbs</p>
                    </div>
                    <div className="price">
                        <p>$13</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>15lbs-60lbs</p>
                    </div>
                    <div className="price">
                        <p>$15</p>
                    </div>
                </div>
                <div className="priceWrapper">
                    <div className="price">
                        <p>60lbs-120lbs</p>
                    </div>
                    <div className="price">
                        <p>$17</p>
                    </div>
                </div>
            </div>
            <div className="extras">
                <div className="priceWrapper">
                    <div className="price">
                        <p style={{ fontSize: 16, lineHeight: '20px' }}>UPS Next Day Air Early, UPS 3 Day Select, Upon&nbsp;request</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UPS;
