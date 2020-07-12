import React, { Fragment, memo, useState, useEffect, useRef } from 'react';
import Row from './../../../UI/Row/ELXRow';
import useStyles from './Cover.styles';

//components imports...
import NavBar from './../NavBar/NavBar';

//Image Import...
import CoverImageOne from './../../../Assets/images/cover/Slider/one-min.jpg';
import CoverImageTwo from './../../../Assets/images/cover/Slider/two-min.jpg';
import CoverImageThree from './../../../Assets/images/cover/Slider/three-min.jpg';

//NPM Packages...
import ReactVisibilitySensor from 'react-visibility-sensor';
import ScrollAnimation from 'react-animate-on-scroll';
import { useInterval } from 'react-interval-hook';

//constants...
const NAV_WHITE = "NAV_WHITE";
const NAV_TRANSPARENT = "NAV_TRANSPARENT";
const sliderImages = [
    CoverImageOne,
    CoverImageTwo,
    CoverImageThree
];


const Cover = props => {

    //styles init..
    const classes = useStyles();
    //Refs....
    const sliderIndex = useRef(0);

    //state management...
    const [navType, setNavType] = useState(NAV_TRANSPARENT);
    const [currentSliderImage, setCurrentSliderImage] = useState(sliderImages[0]);

    //Inline styles...
    const styles = {
        backgroundImage: `url(${currentSliderImage})`,
    };

    //Registering Interval...
    const { start, stop, isActive } = useInterval(
        () => {
            console.log('Callback every 500 ms');
            setNextSliderImage();
        },
        5000,
        {
            autoStart: false,
            immediate: false,
            onFinish: () => {
                console.log('Callback when timer is stopped');
            },
        }
    );

    //Use Effect...
    useEffect(() => {
        start();
        return () => {
            stop();
        }
    }, []);

    //Methods....
    const onChangeNavBarVisibility = visible => setNavType(visible ? NAV_TRANSPARENT : NAV_WHITE);

    const setNextSliderImage = () => {
        if (sliderIndex.current === sliderImages.length - 1) {
            sliderIndex.current = 0;
        }
        else {
            sliderIndex.current++;
        }
        return setCurrentSliderImage(sliderImages[sliderIndex.current]);
    }//..................get Next Slider Image

    return (
        <Fragment>


            <Row
                className={classes.container}
                style={styles}
            >
                <Row>
                    <NavBar
                        navType={navType}
                    />
                </Row>
                <ReactVisibilitySensor
                    onChange={onChangeNavBarVisibility}
                >
                    <Row className={classes.visibilitySensor}></Row>
                </ReactVisibilitySensor>

                <Row className={classes.webTitle}>
                    <Row className={classes.titleText}>
                        <ScrollAnimation animateIn="bounceInLeft">
                            OSFP
                        </ScrollAnimation>
                    </Row>
                </Row>
                <Row className={classes.webTitleSecondary}>
                    <Row className={classes.titleTextSecondary}>
                        <ScrollAnimation delay={500}
                            animateIn='flipInY'
                            initiallyVisible={true}
                        >
                            Overseas Facilitation Portal
                        </ScrollAnimation>
                    </Row>
                </Row>
            </Row>


        </Fragment >
    );

}//................

export default memo(Cover);