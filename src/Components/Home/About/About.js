import React, { Fragment } from 'react';
import useStyles from './About.styles';

//UI Imports...
import Row from './../../../UI/Row/ELXRow';
import Paper from '@material-ui/core/Paper';


//Icons imports...
import Logo from './../../../Assets/images/Logo/logo.png';
import Mission from './../../../Assets/images/Home/target.svg';

//NPM Imports...
import ScrollAnimation from 'react-animate-on-scroll';

const About = props => {

    //Styles init...
    const classes = useStyles();

    return (
        <Fragment>
            <Row className={classes.container}>
                <Row className={classes.title}>
                    OSFP
                </Row>

                {/* One Row Starts... */}
                <Row className={classes.leftAlignedRow}>
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                    >
                        <Paper elevation={8} className={classes.leftImagePaper}>

                            <img
                                src={Logo}
                                className={classes.icon}
                            />

                        </Paper>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='bounceInRight'
                    >
                        <Row className={classes.iconText}>
                            <Row>ABOUT OSFP</Row>
                            Overseas Facilitation Portal is a platform that provides facilitation services to our oversears community. Our services includes keeping security of your assest and maintenance of your households. This portal will provide services to keep you linked with your motherland
                    </Row>
                    </ScrollAnimation>
                </Row>
                {/* One Row Ends */}

                {/* Second Row Starts... */}
                <Row className={classes.rightAlignedRow}>

                    <ScrollAnimation
                        animateIn='bounceInRight'
                    >
                        <Row className={classes.iconTextRight}>
                            <Row>MISSION STATEMENT</Row>
                            Our Mission is to Establish OSFP as the premier collaboration platform while maintaining our uncompromising principles while we grow. We also beleives in ensuring quality services to our customers. We want to establish OSFP as standard platform.
                    </Row>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                    >
                        <Paper elevation={8} className={classes.rightImagePaper}>

                            <img
                                src={Mission}
                                className={classes.missionIcon}
                            />

                        </Paper>
                    </ScrollAnimation>
                </Row>
                {/* Second Row Ends... */}
            </Row>
        </Fragment>
    );
}//.................About OSFP

export default About;