import React from 'react';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import SearchBox from '../SearchBox';

function Home() {
    return (
        <div>
            <div className="home-top-container">
                <Nav />
                <h1 className="header"> <strong>Aradığın yol arkadaşı sadece bir tık uzağında.</strong></h1>
                <SearchBox />
            </div>
            {/* <div className="home-mid-container">
                <h1>AceCar ile istediğin yere git. </h1>
            </div> */}
            <Footer />
        </div>
    );
}

export default Home;
