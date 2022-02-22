import React from "react";
import '../Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const UserNavigation = ({ setIsUser }) => {
    const handleLogout = () => {
        setIsUser(false)
        window.location.reload();
    }
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

                            <Link to={"/user"} className="navlink" >User Profile</Link>
                            <Link to={"/user/rescuerequest"} className="navlink" >Rescue Request</Link>
                            <Link to={"/user/thingstable"} className="navlink" >Things We Need</Link>
                            <Link to={"/user/adoptionlisting"} className="navlink" >Adoption Listing</Link>
                            <Link to="/" className="navlink" onClick={handleLogout} >Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );

}

export default UserNavigation;


// import React from 'react';
// import "./UserNavigation.css";
// import { Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";

// function UserNavigation(setIsUser) {

//     const handleLogout = () => {
//         setIsUser(false)
//         window.location.reload();
//     }

//     return (
//         <>

//             <Link to={"/user"} className="navlink" >User Profile</Link>
//             <Link to={"/user/rescuerequest"} className="navlink" >Rescue Request</Link>
//             <Link to={"/user/thingstable"} className="navlink" >Things We Need</Link>
//             <Link to={"/user/adoptionlisting"} className="navlink" >Adoption Listing</Link>
//             <Link to="/" className="navlink" onClick={handleLogout} >Logout</Link>

//         </>
//     )
// }

// export default UserNavigation;