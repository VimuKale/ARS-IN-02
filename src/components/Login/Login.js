import React, { useState } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Login.css';

const Login = ({ setIsUser, setShelter }) => {


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
                userType: userType

            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data === "success" && userType === "User") {
                    alert("USER LOGIN SUCCESSFULL")
                    setIsUser(true);
                }
                else if (data === "success" && userType === "Shelter") {
                    alert("SHELTER LOGIN SUCCESSFULL")
                    setShelter(true);
                }
                else if (data === "failed to Login") {
                    alert("EMPTY FIELDS OR INVALID CRADENTIALS")
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

                    <NavLink to={"/shelterregistration"} className="navlink" >Shelter Registration</NavLink>
                    <br />
                    <NavLink to={"/userregistration"} className="navlink" >User Registration</NavLink>
                </div>

            </div>
        </div>
    );

}

export default Login;