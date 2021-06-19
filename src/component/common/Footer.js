import React from 'react';
import '../../css/Footer.css';
import logo from '../../img/Logo_v3.png';
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
                                <li>
                                    <Link to="/">
                                        Ana Sayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchtrip">
                                        Yolculuk Ara
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/createtrip">
                                        İlan Ver
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        Giriş Yap
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup">
                                        Kaydol
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <ul className="list-unstyled nav-links">
                                <li>
                                    <Link to="/signup">
                                        Kaydol
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/termsandconditions">
                                        Şartlar &amp; Koşullar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        Hakkımızda
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md text-md-center">
                            <ul className="social list-unstyled">
                                <li><a href="https://instagram.com"><span className="fa fa-github"></span></a></li>
                                <li><a href="twitter.com"><span className="fa fa-twitter-square"></span></a></li>
                                <li><a href="facebook.com"><span className="fa fa-instagram"></span></a></li>
                                <li><a href="pinterest.com"><span className="fa fa-facebook-square"></span></a></li>
                                <li><a href="google.com"><span className="fa fa-google-plus-square"></span></a></li>
                            </ul>
                            <p className=""><a href="github.com" className="btn btn-tertiary">Bize Ulaşın</a></p>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12 text-center">
                            <div className="copyright mt-5 pt-1 pb-1y">
                                <p><small>&copy; 2021. Tüm Hakları Saklıdır.</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer >
        </div >
    )
}

export default Footer
