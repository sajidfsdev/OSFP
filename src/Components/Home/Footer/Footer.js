import React, { Fragment } from 'react';
import useStyles from './Footer.styles';

//UI Imports...
import Row from './../../../UI/Row/ELXRow';
import Paper from '@material-ui/core/Paper';

//NPM Imports...
import GoogleMapReact from 'google-map-react';

//Images imports...
import Map from './../../../Assets/images/Footer/map.PNG';
import Facebook from './../../../Assets/images/Footer/facebook.svg';
import Youtube from './../../../Assets/images/Footer/youtube.svg';
import Twitter from './../../../Assets/images/Footer/twitter.svg';
import Instagram from './../../../Assets/images/Footer/instagram.svg';

//Icons Imports....
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = props => {

    //styles init....
    const classes = useStyles();

    return (
        <Fragment>
            <Row className={classes.container}>
                <Row className={classes.body}>
                    <Row className={classes.addressInfo}>
                        <Row className={classes.addressTitle}>
                            OSFP
                        </Row>
                        <Row className={classes.addressLines}>
                            Office No # 243/5 St # 5
                        </Row>
                        <Row className={classes.addressLines}>
                            Sector G-9/4 Federal Area
                        </Row>
                        <Row className={classes.addressLines}>
                            Islamabad
                        </Row>
                        <Row className={classes.addressLines}>
                            (051)-6798765
                        </Row>
                        <Row className={classes.addressLines}>
                            (0334)-7878787
                        </Row>
                        <Row className={classes.addressLines}>
                            Timings:
                        </Row>
                        <Row className={classes.addressLines}>
                            9-AM to 10-PM
                        </Row>
                        <Row className={classes.addressLines}>
                            Monday to Friday
                        </Row>
                    </Row>
                    <Row className={classes.addressInfo}>
                        <Row className={classes.addressTitle}>
                            LOCATION
                        </Row>
                        <Row
                            style={{
                                width: '350px',
                                height: '200px',
                                backgroundColor: 'white'
                            }}
                        >
                            <img src={Map} style={{
                                width: '350px',
                                height: '200px',
                            }} />
                        </Row>
                    </Row>
                    <Row className={classes.addressInfo}>
                        <Row className={classes.addressTitle}>
                            QUICK LINKS
                        </Row>
                        <Row>
                            <ul className={classes.ul}>
                                <li className={classes.li}>
                                    Home
                                </li>
                                <li className={classes.li}>
                                    About
                                </li>
                                <li className={classes.li}>
                                    Services
                                </li>
                                <li className={classes.li}>
                                    Signin
                                </li>

                                <li className={classes.li}>
                                    Contact us
                                </li>
                            </ul>
                        </Row>
                    </Row>
                    <Row className={classes.addressInfo}>
                        <Row className={classes.addressTitle}>
                            MEDIA
                        </Row>
                        <Row>
                            <ul className={classes.ulmedia}>
                                <li className={classes.limedia}>
                                    <Paper elevation={8} className={classes.mediaIconWrapper}>
                                        <img
                                            src={Facebook}
                                            className={classes.mediaIcon}
                                        />
                                    </Paper>
                                </li>
                                <li className={classes.limedia}>
                                    <Paper elevation={8} className={classes.mediaIconWrapper}>
                                        <img
                                            src={Twitter}
                                            className={classes.mediaIcon}
                                        />
                                    </Paper>
                                </li>
                                <li className={classes.limedia}>
                                    <Paper elevation={8} className={classes.mediaIconWrapper}>
                                        <img
                                            src={Youtube}
                                            className={classes.mediaIcon}
                                        />
                                    </Paper>
                                </li>
                                <li className={classes.limedia}>
                                    <Paper elevation={8} className={classes.mediaIconWrapper}>
                                        <img
                                            src={Instagram}
                                            className={classes.mediaIcon}
                                        />
                                    </Paper>
                                </li>

                            </ul>
                        </Row>
                    </Row>
                </Row>
            </Row>
            <Row className={classes.bar}>
                <CopyrightIcon
                    className={classes.copyrightIcon}
                />
                All Rights Reserved
            </Row>
        </Fragment>
    );
}//..................Footer

export default Footer;