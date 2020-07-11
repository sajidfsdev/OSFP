import React, { memo, Fragment, useState } from 'react';
import useStyles from './Stats.styles';

//UI Imports...
import Row from './../../../UI/Row/ELXRow';

//Images imports...
import StatsBanner from './../../../Assets/images/Banners/stats.jpg';

//Icons Imports...
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//NPM Imports...
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from "react-countup";
import ReactVisibilitySensor from 'react-visibility-sensor';

const Stats = props => {


    //styles init...
    const classes = useStyles();

    //Inline styles...
    const styles = {
        backgroundImage: `url(${StatsBanner})`,
    };

    //State starts...
    const [isVisible, setIsVisible] = useState(false);

    //Methods....
    const setVisibility = (visibility) => setIsVisible(visibility);

    return (
        <Fragment>
            <ReactVisibilitySensor
                onChange={setVisibility}
            >
                <Row
                    className={classes.container}
                    style={styles}
                >
                    <Row className={classes.backDrop}>

                        <Row className={classes.backDropLeftArea}>
                            <ScrollAnimation
                                animateIn='bounceInLeft'
                                animateOut='bounceOutLeft'
                            >
                                <Row className={classes.backDropLeftAreaUpperBox}>Some Interesting</Row>
                                <Row className={classes.backDropLeftAreaLowerBox}>Facts</Row>
                            </ScrollAnimation>
                        </Row>
                        <Row className={classes.backDropRightArea}>

                            <Row className={classes.statsTable}>

                                <Row className={classes.box}>
                                    <Row className={classes.iconContainer}>
                                        <PersonAddIcon className={classes.statsIcon} />
                                    </Row>
                                    <Row className={classes.statsCount}>
                                        {
                                            isVisible ?
                                                <CountUp duration={5} end={500} />
                                                :
                                                500
                                        }+

                                </Row>
                                    <Row className={classes.iconTitle}>
                                        Clients
                                </Row>
                                </Row>



                                <Row className={classes.box}>
                                    <Row className={classes.iconContainer}>
                                        <PersonAddIcon className={classes.statsIcon} />
                                    </Row>
                                    <Row className={classes.statsCount}>
                                        {
                                            isVisible ?
                                                <CountUp duration={5} end={200} />
                                                :
                                                200
                                        }+
                                    </Row>
                                    <Row className={classes.iconTitle}>
                                        Providers
                                </Row>
                                </Row>
                                <Row className={classes.box}>
                                    <Row className={classes.iconContainer}>
                                        <PersonAddIcon className={classes.statsIcon} />
                                    </Row>
                                    <Row className={classes.statsCount}>
                                        {
                                            isVisible ?
                                                <CountUp duration={5} end={30} />
                                                :
                                                30
                                        }+
                                    </Row>
                                    <Row className={classes.iconTitle}>
                                        Visitors
                                </Row>
                                </Row>

                                <Row className={classes.box}>
                                    <Row className={classes.iconContainer}>
                                        <PersonAddIcon className={classes.statsIcon} />
                                    </Row>
                                    <Row className={classes.statsCount}>
                                        {
                                            isVisible ?
                                                <CountUp duration={5} end={50} />
                                                :
                                                50
                                        }+
                                    </Row>
                                    <Row className={classes.iconTitle}>
                                        Projects
                                </Row>
                                </Row>

                            </Row>

                        </Row>

                    </Row>

                </Row>
            </ReactVisibilitySensor>
        </Fragment>
    );
}//................Stats ends

export default memo(Stats);