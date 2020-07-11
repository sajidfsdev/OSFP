import React, { Fragment, memo } from 'react';
import Row from './../../UI/Row/ELXRow';
import useStyles from './Home.styles';

//components imports...
import Cover from './../../Components/Home/Cover/Cover';
import Services from './../../Components/Home/Services/Services';
import Stats from './../../Components/Home/Stats/Stats';

const Home = props => {

    //styles init..
    const classes = useStyles();

    return (
        <Fragment>

            {/* Page cover */}
            <Cover />
            {/* ---------------- */}

            {/* Service Section */}
            <Services />
            {/* ----------------- */}

            {/* Stats Section */}
            <Stats />
            {/* -------------------- */}
        </Fragment>
    );

}//................

export default memo(Home);