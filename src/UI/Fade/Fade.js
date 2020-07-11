import React, { memo } from 'react';
import Fade from '@material-ui/core/Fade';


const FadingComponent = ({ children, ...otherProps }) => {
    return (
        <Fade {...otherProps}>
            {children}
        </Fade>
    );
}//............................

export default FadingComponent;