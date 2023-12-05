import React, { useState, useRef } from 'react';

const ShipperDropDown = () => {
    const options = ['USPS Priority', 'USPS Ground Adv', 'UPS Ground', 'UPS 3 Day Select', 'UPS 2 Day Air'];

    const [selectedOption, setSelectedOption] = useState('');
    const [isUPSLabel, setIsUPSLabel] = useState(false);
    const upsCheckRef = useRef<HTMLDivElement>(null);

    const handleDropdownChange = (e: { target: { value: any } }) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        // Check if the selected value is one of the UPS options
        if (selectedValue === 'UPS Ground' || selectedValue === 'UPS 3 Day Select' || selectedValue === 'UPS 2 Day Air') {
            setIsUPSLabel(true);
        } else {
            setIsUPSLabel(false);
        }
    };

    const toggleUPS = () => {
        setIsUPSLabel((isUPSLabel) => !isUPSLabel);
    };

    const openUPS = () => {
        const upsSliderDiv = upsCheckRef.current;

        if (upsSliderDiv !== null) {
            if (isUPSLabel) {
                upsSliderDiv.classList.add('upsAnimationClose');
                upsSliderDiv.classList.remove('upsAnimationOpen');
                // sliderAnimationOpen
            } else {
                upsSliderDiv.classList.add('upsAnimationOpen');
                upsSliderDiv.classList.remove('upsAnimationClose');
            }
        }

        toggleUPS();
    };

    return (
        <div className="typeOfLabel">
            <label>
                <p>Select a Shipping Option:</p>
            </label>
            <select value={selectedOption} onChange={handleDropdownChange} required>
                <option value="" disabled selected>
                    Select an option
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {(selectedOption === 'UPS Ground' || selectedOption === 'UPS 3 Day Select' || selectedOption === 'UPS 2 Day Air') && (
                <div ref={upsCheckRef} className="upsAnimationClose">
                    {isUPSLabel && (
                        <div className="toggleClass">
                            <label htmlFor="ups_dimensions" className="upsDimensionsLabel">
                                <p>Add dimensions below:</p>
                            </label>
                            <div className="upsLabelDimensions">
                                <div>
                                    <p>
                                        H:
                                        <input type="text" name="height" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        W:
                                        <input type="text" name="width" className="upsInput" required />″
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        L:
                                        <input type="text" name="length" className="upsInput" required />″
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShipperDropDown;
