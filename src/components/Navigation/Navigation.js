import React from "react";
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserNavigation from "./UserNavigation/UserNavigation";
import ShelterNavigation from "./ShelterNavigation/ShelterNavigation";
import AdminNavigation from "./AdminNavigation/AdminNavigation";

const Navigation = ({ isUser, setIsUser, setIsShelter, isShelter, isAdmin, setIsAdmin }) => {


    const Navi = isUser ?
        (<UserNavigation setIsUser={setIsUser} />)
        : ((isShelter) ?
            (<ShelterNavigation setIsShelter={setIsShelter} />)
            : ((isAdmin) ?
                (<AdminNavigation setIsAdmin={setIsAdmin} />)
                :
                (<div>
                    <Navbar collapseOnSelect expand="lg" fixed='top' className="color-nav">
                        <Container>
                            <Navbar.Brand as={Link} to={"/"}>Animal Rescue System(ARS)⚡</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Link to={"/login"} className="navlink" >Login</Link>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div >
                )
            )
        )


    return Navi;

}

export default Navigation;