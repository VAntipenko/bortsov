import React from 'react';

import { Container } from './Container';

export const WrapperBlock = ({ className, children }) => {
    return (
        <div className="wrapperBlock">
            <div className={className}>
                <Container>{children}</Container>
            </div>
        </div>
    );
};
