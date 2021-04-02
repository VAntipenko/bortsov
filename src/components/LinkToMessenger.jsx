import React from 'react';
import { Link } from 'react-router-dom';

export const LinkToMessenger = ({ url, children }) => {
    const redirectToMessanger = url => {
        window.open(url);
    };
    return (
        <Link to="" onClick={() => redirectToMessanger(url)}>
            {children}
        </Link>
    );
};
