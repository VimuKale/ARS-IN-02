import React from 'react';
import "./FooterComp.css";

function FooterComp() {
    return (
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h4>About us:</h4>
                            <img className="logo" alt='pic' src={require("./saathlogo.jpg")} />
                            <h4 className="list-unstyled">
                                <li>
                                    "Saath Animal Welfare Trust" is a shelter in our community. It
                                    is a non-profiting organisation which is run by volunteers. They
                                    rescue a variety of animals including dogs, cats & etc.
                                </li>

                            </h4>
                        </div>

                        <div className="col">
                            <h4>Contact us:</h4>

                            <div className="contact">
                                <h3>
                                    <a href="mailto: saathfoundationofficial@gmail.com" className='contact-logo'>
                                        <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                            style={{ color: "rgb(255, 211, 45" }}
                                        ></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/saath_animal_welfare_trust/"
                                        target={"_blank"}
                                        rel="noreferrer"
                                        className='contact-logo'
                                    >
                                        <i
                                            className="fa fa-instagram"
                                            aria-hidden="true"
                                            style={{ color: "rgb(255, 211, 45" }}
                                        ></i>
                                    </a>
                                    <a href="tel:+919271208802" className='contact-logo'>
                                        <i
                                            className="fa fa-phone"
                                            aria-hidden="true"
                                            style={{ color: "rgb(255, 211, 45" }}
                                        ></i>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Animal Rescue System | All rights
                            reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComp;









