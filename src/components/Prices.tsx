import React, { useState } from 'react';
import UPS from '../assets/images/ups.svg';
import USPS from '../assets/images/usps.svg';
import UPSImg from '../assets/images/ups.svg';
import USPSImg from '../assets/images/usps.svg';

const USPSimage = <img alt="USPS" className="uspsLogo" src={USPSImg} style={{ width: 150, display: 'block' }} />;
const UPSimage = <img alt="UPS" className="upsLogo" src={UPSImg} style={{ width: 45, display: 'block' }} />;

const LabelSlider = () => {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsChecked(event.target.checked);
        console.log('isChecked:', isChecked);
    }

    return (
        <div className="labelOptions">
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span className="slider round"></span>
            </label>
            <div
            // htmlFor="toggle-checkbox"
            >
                {isChecked ? UPSimage : USPSimage}
                {isChecked ? <UPS /> : <USPS />}
            </div>
        </div>
    );
};

const Prices = () => {
    return (
        <>
            <div className="prices hideFlex">
                {USPSimage}
                {UPSimage}
            </div>
            <LabelSlider />
            <div className="prices">
                <USPS />
                <UPS />
            </div>
        </>
    );
};

export default Prices;
