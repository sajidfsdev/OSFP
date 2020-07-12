import React, { Fragment, memo } from 'react';
import Row from './../../UI/Row/ELXRow';
import useStyles from './Home.styles';

//components imports...
import Cover from './../../Components/Home/Cover/Cover';
import Services from './../../Components/Home/Services/Services';
import Stats from './../../Components/Home/Stats/Stats';
import About from './../../Components/Home/About/About';
import Testimonials from './../../Components/Home/Testimonial/Testimonial';
import JoinUs from './../../Components/Home/JoinUs/JoinUs';
import Footer from './../../Components/Home/Footer/Footer';

const Home = props => {

    //styles init..
    const classes = useStyles();

    return (
        <Fragment>

            {/* Page cover */}
            <Cover />
            {/* ---------------- */}

            {/* About Section */}
            <About />
            {/* ------------------ */}

            {/* Service Section */}
            <Services />
            {/* ----------------- */}

            {/* JoinUs Section */}
            <JoinUs />
            {/* -------------------- */}

            {/* Stats Section */}
            <Stats />
            {/* -------------------- */}

            {/* Test section starts... */}
            <Testimonials />
            {/* Test section ends..... */}

            {/* Footer Section  */}
            <Footer />
            {/* ------------------------- */}
        </Fragment>
    );

}//................

export default memo(Home);