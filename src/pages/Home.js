import React, { Fragment } from "react";

import Navbar from "../components/nav/navbar";
import Accordionn from "../components/accordion/accordion";
import DoctorList from "../components/doctorList/doctorList";
import Summery from "../components/summery/summery";
import Review from "../components/review/review";
import Technology from './../components/technology/technology';
import It_Img from './../components/it-img/it-img';
import Contact from './../components/contact/contact';
import Footer from "../components/footer/footer";

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Accordionn />
            <DoctorList />    
            <Summery /> 
            <Review />
            <Technology />
            <It_Img />  
            <Contact />
            <Footer />
        </Fragment>

    )
}

export default Home;