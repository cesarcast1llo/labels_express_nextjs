import React from 'react';

type MenuProps = {
    firstPage: string;
    secondPage: string;
};

const Menu: React.FC<MenuProps> = ({ firstPage, secondPage }) => {
    return (
        <div className="Menu">
            <a className="option" href={`/${firstPage}`}>
                {firstPage}
            </a>
            <a className="option" href={`/${secondPage}`}>
                {secondPage}
            </a>
        </div>
    );
};

export default Menu;
