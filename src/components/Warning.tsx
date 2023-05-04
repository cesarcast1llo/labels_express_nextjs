import React from 'react';

const Warning = () => {
    return (
        <>
            <div className="warning">
                <div className="warnWrapper">
                    <p>
                        UPS & USPS are currently down, <br className="hide" />
                        feel free to contact&nbsp;
                        <a href="sms:5109454950">
                            <span>510-945-4590</span>{' '}
                        </a>
                        for more&nbsp;info
                    </p>
                </div>
            </div>
        </>
    );
};

export default Warning;
