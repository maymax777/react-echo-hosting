import React from 'react'
import Preloader from 'components/Preloader';
import Header from 'components/Header';
import Slider from 'containers/Slider';
import SearchDomain from 'containers/SearchDomain';
import TeamService from 'containers/TeamService';
import Membership from 'containers/Membership';
import About from 'containers/About';
import Question from 'containers/Question';
import Testimonial from 'containers/Testimonial';

function Home() {
    return (
        <>
            <Preloader />
            <Header />
            <Slider />
            <SearchDomain />
            <TeamService />
            <Membership />
            <About />
            <Question />
            <Testimonial />
        </>
    )
}

export default Home
