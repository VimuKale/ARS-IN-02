import React, { useState } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './Login.css';

const Login = ({ setIsUser, setIsShelter, setUtype, setIsAdmin }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");



    function onSubmitVal() {
        console.log(email, password, userType);
        fetch("http://localhost:3002/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                type: userType

            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.type === "User") {
                    alert("USER LOGIN SUCCESSFULL")
                    setIsUser(true);
                    setUtype(data.type);
                    <Redirect to="/user" />
                }
                else if (data.type === "Shelter") {
                    alert("SHELTER LOGIN SUCCESSFULL")
                    setIsShelter(true);
                    setUtype(data.type);
                    <Redirect to="/shelter" />
                }
                else if (data.type === "Admin") {
                    alert("ADMIN LOGIN SUCCESSFULL")
                    setIsAdmin(true);
                }
                else if (data === "unable to get User") {
                    alert("Unable To Get User");
                }
                else if (data === "Wrong Credentials") {
                    alert("Wrong Credentials");
                }

            });
    }

    return (

        <div className="login-container">
            <h1>Login</h1>

            <div className='form-filds-container'>

                <Form.Floating className="mb-3 ml-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                    <Form.Control.Feedback type="invalid" className="form-control-feedback">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Floating>



                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                    <Form.Control.Feedback type="invalid" className="form-control-feedback">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Floating>



                <Row>
                    <Form.Group className='frm-grp-fild' size="lg" as={Col} controlId="petType">
                        <Form.Label className='frm-lbl label-left'>User Type</Form.Label>
                        <Form.Select defaultValue="Shelter" required onChange={event => setUserType(event.target.value)}>
                            <option>Shelter</option>
                            <option>User</option>
                            <option>Admin</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Button className="submit-btn" variant="primary" type="submit" onClick={onSubmitVal}>
                    SignIn
                </Button>



                <div className="reg-link">

                    <Link to={"/shelterregistration"} className="navlink" >Shelter Registration</Link>
                    <br />
                    <Link to={"/userregistration"} className="navlink" >User Registration</Link>
                </div>

            </div>
        </div>
    );

}

export default Login;