import React from 'react';

type MenuProps = {
    firstPage: string;
    secondPage: string;
};

const Menu: React.FC<MenuProps> = ({ firstPage, secondPage }) => {
    const checkForHome = (page: string): string => {
        if (page.toLowerCase() === 'home') {
            return '/';
        }
        return `/${page}`;
    };

    return (
        <div className="menu">
            <a className="option" href={checkForHome(firstPage)}>
                {firstPage}
            </a>
            <a className="option" href={checkForHome(secondPage)}>
                {secondPage}
            </a>
        </div>
    );
};

export default Menu;
