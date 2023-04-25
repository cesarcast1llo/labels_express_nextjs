import React from 'react';
import Link from 'next/link';

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
            <Link className="option" href={checkForHome(firstPage)}>
                {firstPage}
            </Link>
            {/* <a className="option" href={checkForHome(secondPage)}>
                {secondPage}
            </a> */}
        </div>
    );
};

export default Menu;
