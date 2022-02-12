import React from "react";
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Navigation = ({ isUser, isShelter }) => {

    return (
        <div>
            <Navbar className="color-nav" collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand as={NavLink} to={"/"}>Animal Rescue System(ARS)⚡</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {/* {isShelter
                                ?
                                <>
                                    <NavLink to={"/shelter"} className="navlink">Shelter Profile</NavLink>
                                    <NavLink to={"/listpet"} className="navlink">List Pet</NavLink>
                                    <NavLink to={"/listsupplies"} className="navlink">List Supplies</NavLink>
                                    <NavLink to={"/viewrescuerequest"} className="navlink">View Rescue Request</NavLink>
                                </>
                                :
                                <NavLink to={"/login"} className="navlink" >Login</NavLink>
                            } */}
                            {
                                isUser
                                    ?
                                    <>
                                        <NavLink to={"/user"} className="navlink" >User Profile</NavLink>
                                        <NavLink to={"/user/rescuerequest"} className="navlink" >Rescue Request</NavLink>
                                        <NavLink to={"/user/thingstable"} className="navlink" >Things We Need</NavLink>
                                        <NavLink to={"/user/adoptionlisting"} className="navlink" >Adoption Listing</NavLink>
                                    </>
                                    :
                                    <NavLink to={"/login"} className="navlink" >Login</NavLink>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );

}

export default Navigation;