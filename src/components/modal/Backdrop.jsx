import React from 'react';
import { StyledBackdrop } from './styles';

const Backdrop = ({ children }) => {
    return (
        <StyledBackdrop>
            { children }
        </StyledBackdrop>
    );
};

export default Backdrop;