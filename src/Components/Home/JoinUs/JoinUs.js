import React, { Fragment } from 'react';
import useStyles from './JoinUs.styles';

//UI Imports...
import Row from './../../../UI/Row/ELXRow';
import { Button, Paper } from '@material-ui/core';

//Images imports...
import HandShake from './../../../Assets/images/SignIn/handshake.jpg';
import Google from './../../../Assets/images/SignIn/google.svg';
import Login from './../../../Assets/images/SignIn/login.svg';
import Register from './../../../Assets/images/SignIn/register.svg';

//NPM Imports...
import ScrollAnimation from 'react-animate-on-scroll';

const JoinUs = props => {

    //styles init...
    const classes = useStyles();

    return (
        <Fragment>
            <Row className={classes.container}>
                <Row className={classes.breakPointRow}>
                    <Row className={classes.breakPoint}></Row>
                </Row>
            </Row>

            <Row className={classes.title}>
                Come Join Us!
            </Row>

            <Row className={classes.sectionOuterRow}>
                <Row className={classes.sectionInnerRow}>

                    <Paper elevation={5} className={classes.leftSection}>

                        <img
                            src={HandShake}
                            style={{ width: '100%', borderRadius: '20px' }}
                        />

                    </Paper>

                    <Row className={classes.rightSection}>
                        <ScrollAnimation
                            animateIn="bounceInRight"
                        >
                            <Row className={classes.rightSectionTitle}>
                                SIGNIN
                        </Row>
                            <Row className={classes.btnRow}>
                                <Button
                                    variant="contained"
                                    classes={{
                                        root: classes.rootBtn,
                                        startIcon: classes.startIcon,
                                        label: classes.btnLabel
                                    }}
                                    startIcon={
                                        <img
                                            src={Google}
                                            className={classes.btnIcon}
                                        />
                                    }
                                >
                                    Signin with Google
                                <Row className={classes.interBtnMargin}></Row>
                                </Button>
                            </Row>
                            <Row className={classes.textRow}>
                                -OR-
                        </Row>
                            <Row className={classes.btnRow}>
                                <Button
                                    variant="contained"
                                    classes={{
                                        root: classes.rootBtn,
                                        startIcon: classes.startIcon,
                                        label: classes.btnLabel
                                    }}
                                    startIcon={
                                        <img
                                            src={Login}
                                            className={classes.btnIcon}
                                        />
                                    }
                                >
                                    Sign In
                                <Row className={classes.interBtnMargin}></Row>
                                </Button>
                            </Row>
                            <Row className={classes.textRow}>
                                -OR-
                        </Row>
                            <Row className={classes.btnRow}>
                                <Button
                                    variant="contained"
                                    classes={{
                                        root: classes.rootBtn,
                                        startIcon: classes.startIcon,
                                        label: classes.btnLabel
                                    }}
                                    startIcon={
                                        <img
                                            src={Register}
                                            className={classes.btnIcon}
                                        />
                                    }
                                >
                                    Register
                                <Row className={classes.interBtnMargin}></Row>
                                </Button>
                            </Row>
                        </ScrollAnimation>
                    </Row>
                </Row>
            </Row>
        </Fragment>
    );

}//..................Join Us

export default JoinUs;