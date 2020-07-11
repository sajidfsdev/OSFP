import React from 'react';
import useStyles from './FlexBox.styles';

const FlexBox = props => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.children}>A</div>
            <div className={classes.children}>B</div>
            <div className={classes.children}>C</div>
            <div className={classes.children}>D</div>
            <div className={classes.children}>E</div>
            <div className={classes.children}>F</div>
            <div className={classes.children}>G</div>
        </div>
    );

}//...............flexBox

export default FlexBox;