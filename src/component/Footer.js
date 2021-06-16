import React from 'react';
import '../css/Footer.css';
import logo from '../img/Logo_wname_v2.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>
            <footer className="footer-48201">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pr-md-5">

                            <Link to="/">
                                <img className="footer-site-logo d-block mb-4" src={logo} alt="AceCar" />
                            </Link>
                            <p>AceCar projesi Alper Gök, Cem Özgür ve Enverpaşa Nebiyev tarafından geliştirilmiş bir car pooling projesidir.</p>
                        </div>
                        <div className="col-md">
                            <ul className="list-unstyled nav-links">
                                <li><a href="#">Ana Sayfa</a></li>
                                <li><a href="#">Yolculuk Ara</a></li>
                                <li><a href="#">İlan Ver</a></li>
                                <li><a href="#">Giriş Yap</a></li>
                                <li><a href="#">Kaydol</a></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <ul className="list-unstyled nav-links">
                                <li><a href="#">Sıkça Sorulan Sorular</a></li>
                                <li><a href="#">Şartlar &amp; Koşullar</a></li>
                                <li><a href="#">Hakkımızda</a></li>

                            </ul>
                        </div>
                        <div className="col-md text-md-center">
                            <ul className="social list-unstyled">
                                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                                <li><a href="#"><span className="fa fa-twitter-square"></span></a></li>
                                <li><a href="#"><span className="fa fa-facebook-square"></span></a></li>
                                <li><a href="#"><span className="fa fa-pinterest-square"></span></a></li>
                                <li><a href="#"><span className="fa fa-google-plus-square"></span></a></li>
                            </ul>
                            <p className=""><a href="#" className="btn btn-tertiary">Bize Ulaşın</a></p>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12 text-center">
                            <div className="copyright mt-5 pt-1 pb-1">
                                <p><small>&copy; 2021. Tüm Hakları Saklıdır.</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
