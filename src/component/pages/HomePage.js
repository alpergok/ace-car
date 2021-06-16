import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import SearchBox from '../SearchBox';

function Home() {
    return (
        <div>
            <div className="home-top-container">
                <Nav />
                <h1 className="header"> <strong>Aradığın yol arkadaşı sadece bir tık uzağında.</strong></h1>
                <SearchBox />
                {/* <div className="SearchBox-group">
                    <input className="trip-SearchBox loc" type="text" placeholder="Kalkış Yeri" />
                    <input className="trip-SearchBox loc" type="text" placeholder="Varış Yeri" />
                    <input className="trip-SearchBox form" type="date" />
                    <input className="trip-SearchBox form" type="number" />
                </div> */}
            </div>
            {/* <div className="home-mid-container">
                <h1>AceCar ile istediğin yere git. </h1>
            </div> */}
            <Footer />
        </div>
    );
}

export default Home;
