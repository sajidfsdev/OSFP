import React, { Fragment } from 'react';
import useStyles from './Testimonial.styles';

//UI Imports...
import Row from './../../../UI/Row/ELXRow';
import Paper from '@material-ui/core/Paper';

//Icons imports...
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

//Images Import
import PersonOne from './../../../Assets/images/Testimonials/one.png';

//NPM Imports...
import ScrollAnimation from 'react-animate-on-scroll';

const Testimonials = props => {

    //styles init...
    const classes = useStyles();
    return (
        <Fragment>
            <Row className={classes.container}>
                <Row className={classes.title}>
                    Testimonials
                </Row>
                <Row className={classes.boxRow}>
                    {/* Box Starts.... */}
                    <ScrollAnimation
                        animateIn="fadeIn"
                        delay={100}
                    >
                        <Paper elevation={8} className={classes.box} style={{ marginLeft: '25px' }}>
                            <Row className={classes.thumbupIconRow}>
                                <ThumbUpIcon className={classes.thumbup} />
                            </Row>

                            <Paper elevation={5} className={classes.boxImageRow}>
                                <img
                                    src={PersonOne}
                                    className={classes.img}
                                />
                            </Paper>
                            <Row className={classes.boxTitle}>
                                Ali Ahsan
                        </Row>
                            <Row className={classes.boxComment}>
                                <Row className={classes.padding}></Row>
                                <Row className={classes.comment}>
                                    I am very proud to be part of OSFP. As an oversea I am now free of worrying about
                                    my assets in my country.I recommend all of you to consider this platform Thanks to OSFP
                        </Row>
                                <Row className={classes.padding}></Row>
                            </Row>

                        </Paper>
                    </ScrollAnimation>
                    {/* Box ends.... */}

                    {/* Box Starts.... */}
                    <ScrollAnimation
                        animateIn="fadeIn"
                        delay={100}
                    >
                        <Paper elevation={8} className={classes.box} style={{ marginLeft: '25px' }}>
                            <Row className={classes.thumbupIconRow}>
                                <ThumbUpIcon className={classes.thumbup} />
                            </Row>

                            <Paper elevation={5} className={classes.boxImageRow}>
                                <img
                                    src={PersonOne}
                                    className={classes.img}
                                />
                            </Paper>
                            <Row className={classes.boxTitle}>
                                Ali Ahsan
                        </Row>
                            <Row className={classes.boxComment}>
                                <Row className={classes.padding}></Row>
                                <Row className={classes.comment}>
                                    I am very proud to be part of OSFP. As an oversea I am now free of worrying about
                                    my assets in my country.I recommend all of you to consider this platform Thanks to OSFP
                        </Row>
                                <Row className={classes.padding}></Row>
                            </Row>

                        </Paper>
                    </ScrollAnimation>
                    {/* Box ends.... */}

                    {/* Box Starts.... */}
                    <ScrollAnimation
                        animateIn="fadeIn"
                        delay={100}
                    >
                        <Paper elevation={8} className={classes.box} style={{ marginLeft: '25px' }}>
                            <Row className={classes.thumbupIconRow}>
                                <ThumbUpIcon className={classes.thumbup} />
                            </Row>

                            <Paper elevation={5} className={classes.boxImageRow}>
                                <img
                                    src={PersonOne}
                                    className={classes.img}
                                />
                            </Paper>
                            <Row className={classes.boxTitle}>
                                Ali Ahsan
                        </Row>
                            <Row className={classes.boxComment}>
                                <Row className={classes.padding}></Row>
                                <Row className={classes.comment}>
                                    I am very proud to be part of OSFP. As an oversea I am now free of worrying about
                                    my assets in my country.I recommend all of you to consider this platform Thanks to OSFP
                        </Row>
                                <Row className={classes.padding}></Row>
                            </Row>

                        </Paper>
                    </ScrollAnimation>
                    {/* Box ends.... */}


                </Row>
            </Row>
        </Fragment>
    );
}//.........................

export default Testimonials;