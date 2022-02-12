import React, { useState } from "react";
import { Form, Button, Col, Row } from 'react-bootstrap';
import './Login.css';

const Login = ({ setIsUser, setShelter }) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setIsUser(true);
            setShelter(true);
        }

        setValidated(true);
    };


    return (

        <div className="login-container">
            <h1>Login</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-filds-container'>

                <Form.Floating className="mb-3 ml-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
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
                        <Form.Select defaultValue="Shelter" required>
                            <option>Shelter</option>
                            <option>User</option>
                            <option>Admin</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Button className="submit-btn" variant="primary" type="submit"  >
                    SignIn
                </Button>



                <div className="reg-link">
                    <a href="#0" >Shelter Registration</a>
                    <br />
                    <a href="#0" >User Registration</a>
                </div>

            </Form>
        </div>
    );

}

export default Login;