import React from 'react';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import '../../css/About.css';
import image from '../../img/Alper.png';

function AboutPage() {
  return (
    <div>
      <div className="container">
        <h1 className="name">Our Team</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={image} alt ="Alper Gök" />
              </div>
              <div className="team-content">
                <h3 className="name">Alper Gök</h3>
                <h4 className="title">Frontend Developer  </h4>
              </div>
              <ul className="social">
                <li><a href="https://github.com/alpergok" className="fa fa-github" aria-hidden="true"> </a></li>
                <li><a href="https://instagram.com/alpeergok" className="fa fa-instagram" aria-hidden="true"> </a></li>
                <li><a href="https://linkedin.com/in/alpergok/" className="fa fa-linkedin" aria-hidden="true"> </a></li>
                <li><a href="https://facebook.com/alpergok562/" className="fa fa-facebook" aria-hidden="true"> </a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=839" alt ="Cem Özgür" />
              </div>
              <div className="team-content">
                <h3 className="name">Cem Özgür</h3>
                <h4 className="title">Backend Developer</h4>
              </div>
              <ul className="social">
                <li><a href="https://github.com/CemOzgr" className="fa fa-github" aria-hidden="true"> </a></li>
                <li><a href="https://instagram.com" className="fa fa-instagram" aria-hidden="true"> </a></li>
                <li><a href="https://linkedin.com/in/cem-%C3%B6zg%C3%BCr-56a8971b4/" className="fa fa-linkedin" aria-hidden="true"> </a></li>
                <li><a href="https://www.facebook.com/cem.ozgur.77770" className="fa fa-facebook" aria-hidden="true"> </a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=856" alt ="Enverpaşa Nebiyev" />
              </div>
              <div className="team-content">
                <h3 className="name">Enverpaşa Nebiyev</h3>
                <h4 className="title">Mobile Developer</h4>
              </div>
              <ul className="social">
                <li><a href="https://github.com/Anvarpasha" className="fa fa-github" aria-hidden="true"> </a></li>
                <li><a href="https://instagram.com/anvarpashanabiyev" className="fa fa-instagram" aria-hidden="true"> </a></li>
                <li><a href="https://linkedin.com/in/anvarpasha-nabiyev-651b32164/" className="fa fa-linkedin" aria-hidden="true"> </a></li>
                <li><a href="https://facebook.com/anvarpasha.nabiyev" className="fa fa-facebook" aria-hidden="true"> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}
export default AboutPage;
