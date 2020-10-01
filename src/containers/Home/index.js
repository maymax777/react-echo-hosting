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
import Footer from 'components/Footer';
import ScrollUp from 'components/ScrollUp';
import ChatBox from 'components/ChatBox';

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
            <Footer />
            <ScrollUp />
            <ChatBox />
        </>
    )
}

export default Home
