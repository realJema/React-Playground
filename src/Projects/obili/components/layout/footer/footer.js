import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
        <footer className="htc__foooter__area">
            <div className="container">
                <div className="row footer-row">
                         {/* <!-- Start Single Footer Widget --> */}
                        <div className="col-md-3 col-lg-3 col-sm-6">
                            <div className="ft__widget">
                                <div className="footer__details">
                                    <p>Get 10% discount with notified about the latest news and updates.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                            <div className="ft__widget">
                                <h2 className="ft__title">Newsletter</h2>
                                <div className="newsletter__form">
                                    <div className="input__box">
                                        <div id="mc_embed_signup">
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div className="col-md-3 col-lg-3 col-sm-6 smt-30 xmt-30">
                            <div className="ft__widget contact__us">
                                <h2 className="ft__title">Contact Us</h2>
                                <div className="footer__inner">
                                    <p>319 Clematis St.<br/>Suite 100 WPB, FL 33401</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget -->
                        <!-- Start Single Footer Widget --> */}
                        <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                            <div className="ft__widget">
                                <h2 className="ft__title">Follow Us</h2>
                                <ul className="social__icon">
                                    <li><i className="zmdi zmdi-twitter"></i></li>
                                    <li><i className="zmdi zmdi-instagram"></i></li>
                                    <li><i className="zmdi zmdi-facebook"></i></li>
                                    <li><i className="zmdi zmdi-google-plus"></i></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Single Footer Widget --> */}
                </div>
                {/* <!-- Start Copyright Area --> */}
                <div className="htc__copyright__area">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="copyright__inner">
                                <div className="copyright">
                                    <p>© NATIVE 2020
                                    All Right Reserved.</p>
                                </div>
                                <ul className="footer__menu">
                                    <li>Home</li>
                                    <li>Product</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Copyright Area --> */}
            </div>
        </footer>
    </div>
    );
}

export default Footer;