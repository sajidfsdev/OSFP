import React, { Fragment, memo, useState, useEffect } from 'react';
import Row from './../../../UI/Row/ELXRow';
import clsx from 'clsx';
import useStyles from './NavBar.styles';

//Icons Imports....
import HomeIcon from '@material-ui/icons/Home';

//constants imports..
import constants from './constants';

//NavData...
const NavData = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Contact Us" }
];

//constants...
const NAV_WHITE = "NAV_WHITE";
const NAV_TRANSPARENT = "NAV_TRANSPARENT";

const NavBar = props => {

    useEffect(() => {
        console.log(props.navType)
    }, [props.navType]);

    //styles init..
    const classes = useStyles();

    //state management starts...
    const [currentScreen, setCurrentScreen] = useState(constants.HOME_PAGE);

    //Methods....
    const getCurrentPageIcon = () => {
        switch (currentScreen) {
            case constants.HOME_PAGE:
                return <HomeIcon
                    className={clsx({
                        [classes.currentPageIcon]: true,
                        [classes.whiteIcon]: true,

                    })}
                />;
        }
    }//current Page Icon ends.....

    return (
        <Fragment>
            <Row className={clsx({
                [classes.container]: true,
                [classes.transparent]: props.navType === NAV_TRANSPARENT,
                [classes.white]: props.navType === NAV_WHITE
            })}>
                <Row className={classes.currentPageInfo}>
                    {getCurrentPageIcon()}
                    <label className={classes.iconLabel}>{currentScreen}</label>
                </Row>
                <ul className={classes.ul}>
                    {
                        NavData.map((elem, index) => (
                            <li key={index} className={classes.li}>
                                {elem.title}
                            </li>
                        ))
                    }
                </ul>
            </Row>
        </Fragment>
    );

}//................

export default memo(NavBar);