import React, { useState } from 'react';
import UPS from './UPS';
import USPS from './USPS';
import Image from 'next/image';
import UPSImg from '../assets/images/ups.svg';
import USPSImg from '../assets/images/usps.svg';

const USPSimage = <Image alt="USPS" className="uspsLogo" src={USPSImg} style={{ width: 150, display: 'block', height: 'auto' }} />;
const UPSimage = <Image alt="UPS" className="upsLogo" src={UPSImg} style={{ width: 45, display: 'block', height: 'auto' }} />;

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
            <div id="toggle-checkbox">
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
