import React from 'react'
import Preloader from 'components/common/Preloader';
import Header from 'components/common/Header';
import Slider from 'containers/Slider';
import SearchDomain from 'containers/SearchDomain';
import TeamService from 'containers/TeamService';
import Membership from 'containers/Membership';

function Home() {
    return (
        <>
            <Preloader />
            <Header />
            <Slider />
            <SearchDomain />
            <TeamService />
            <Membership />
        </>
    )
}

export default Home
