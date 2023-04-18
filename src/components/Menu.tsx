import React from 'react';

function Menu({ firstPage, secondPage }) {
    return (
        <div className="Menu">
            <a className="option" href={`/google}`}>
                {firstPage}
            </a>
            <a className="option" href={`/${secondPage}`}>
                {secondPage}
            </a>
        </div>
    );
}

export default Menu;
