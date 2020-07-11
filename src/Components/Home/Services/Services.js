import React, { memo, Fragment, useState } from 'react';
import Row from './../../../UI/Row/ELXRow';
import useStyles from './Services.styles';

//UI Imports...
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//Icons Imports
import HomeProtection from './../../../Assets/images/services/homeProtection.svg';
import HomeMaintenance from './../../../Assets/images/services/maintenance.svg';
import Shield from './../../../Assets/images/services/shield.svg';
import Lawyer from './../../../Assets/images/services/lawyer.svg';
import ArrowBackIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowForwardIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';


//Npm Packages imports...
import EllipsisText from "react-ellipsis-text";
import ScrollMenu from 'react-horizontal-scrolling-menu';

let text = " This service includes tasks related to protecting your Assets and keep track of all Bills etc.Sitting in oversea you dont have to worry about all related things. we will keep track of all tasks andpreserve your assets";



const Services = props => {
    //classes init...
    const classes = useStyles();

    //Variables...
    const LeftIcon = (
        <Row className={classes.circle}>
            <ArrowBackIcon className={classes.arrowIcon} />
        </Row>
    );

    const RightIcon = (
        <Row className={classes.circle}>
            <ArrowForwardIcon className={classes.arrowIcon} />
        </Row>
    );

    //state..
    const [leftSliderIcon, setLeftSliderIcon] = useState(LeftIcon);
    const [rightSliderIcon, setRightSliderIcon] = useState(RightIcon);

    //Methods...
    const returnServices = () => {
        const arr = [];
        for (let i = 1; i <= 20; i++) {
            let icon = null;
            let title = "HOME PROTECTION";
            switch (i) {
                case 1:
                    icon = HomeProtection;
                    break;
                case 2:
                    icon = HomeMaintenance;
                    title = "MAINTENANCE";
                    break;
                case 3:
                    icon = Shield;
                    title = "SECURITY";
                    break;
                case 4:
                    icon = Lawyer;
                    title = "LEGAL SUPPORT";
                    break;
                default:
                    icon = HomeProtection;
                    title = "HOME PROTECTION";
            }
            arr.push(
                <Row key={i} className={classes.box}>
                    <Paper elevation={8} className={classes.iconPaper}>
                        <img src={icon} className={classes.icon} />
                    </Paper>
                    <Row className={classes.serviceTitle}>
                        {title}
                    </Row>
                    <Row className={classes.description}>
                        <EllipsisText
                            text={text}
                            length={200}>

                        </EllipsisText>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small" classes={{
                                containedPrimary: classes.exploreBtn,
                                root: classes.exploreBtnRoot
                            }}>
                            explore more!
                </Button>
                    </Row>

                </Row>
            );
        }
        return arr;
    }//.......................returnServices

    return (
        <Fragment>
            <Row className={classes.container}>
                <Row className={classes.title}>
                    Services we provide
                </Row>
                <Row className={classes.content}>
                    <ScrollMenu
                        data={returnServices()}
                        arrowLeft={leftSliderIcon}
                        arrowRight={rightSliderIcon}
                        clickWhenDrag={true}
                        dragging={true}
                        alignCenter={false}
                    />
                </Row>
                <Row className={classes.exploreMoreRow}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        classes={{
                            containedPrimary: classes.exploreAllBtn,
                            root: classes.exploreAllBtnRoot
                        }}
                        startIcon={<SearchIcon className={classes.searchIcon} />}
                    >
                        Explore all services!
                    </Button>
                </Row>
            </Row>
        </Fragment>
    );
}//....................

export default memo(Services);