import React from 'react';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import SearchBox from '../SearchBox.js';
function SearchTripPage() {
  return (
    <div className="signup">
     
      <h1 className = "header"> <strong> İstediğin yolculuğa tek tıkla ulaş. </strong></h1>
      <SearchBox />
      <Footer />
    </div>
  );
}

export default SearchTripPage;
