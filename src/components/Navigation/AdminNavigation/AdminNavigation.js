import React from 'react'

import '../Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

function AdminNavigation({ setIsAdmin }) {
    const handleLogout = () => {
        setIsAdmin(false)
        window.location.reload();
    }
    return (
        <> <div>
            <Navbar className="color-nav" collapseOnSelect expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand as={NavLink} to={"/"}>Shelter Nav⚡</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to={"/admin"} className="navlink">Admin Profile</Link>

                            <Link to={"/admin/thingstable"} className="navlink" >Things We Need</Link>

                            <Link to={"/admin/adoptionlisting"} className="navlink" >Adoption Listing</Link>

                            <Link to={"/admin/viewrescuerequest"} className="navlink">View Rescue Request</Link>

                            <Link to={"/"} className="navlink" onClick={handleLogout}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
        </>
    )
}

export default AdminNavigation