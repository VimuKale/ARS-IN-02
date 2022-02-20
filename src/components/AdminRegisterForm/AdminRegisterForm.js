import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './AdminRegisterForm.css';

const AdminRegisterForm = () => {


    const [a_name, seta_name] = useState("");
    const [a_phno, seta_phno] = useState("");
    const [a_email, seta_email] = useState("");
    const [a_password, seta_password] = useState("");
    const [a_addr, seta_addr] = useState("");
    const [a_city, seta_city] = useState("");
    const [a_state, seta_state] = useState("");
    const [a_zip, seta_zip] = useState("");

    function onSubmitVal() {
        console.log(a_name, a_phno, a_email, a_password, a_addr, a_city, a_state, a_zip);

        fetch("http://localhost:3002/adminregister", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                a_name: a_name,
                a_phno: a_phno,
                a_email: a_email,
                a_password: a_password,
                a_addr: a_addr,
                a_city: a_city,
                a_state: a_state,
                a_zip: a_zip,

            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message_type === "success") {
                    alert("Admin Registered Successfully.")
                }
                else if (data.message === "fail") {
                    alert("Unable To Register Admin")
                }
            });
    }








    return (
        <div className='adm-reg-cont'>

            <h1>Admin Registration 🛡️</h1>
            <div className='form-cont'>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridAdminName">
                        <Form.Label className='frm-lbl' >Admin Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Admin Name" onChange={event => seta_name(event.target.value)} />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPhNo">
                        <Form.Label className='frm-lbl'>Phone No.</Form.Label>
                        <Form.Control type="text"
                            onChange={event => seta_phno(event.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}

                            maxLength={10}
                            placeholder="ex.74XXXXXX91 [10 digits]" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridEmail">
                        <Form.Label className='frm-lbl' >Email</Form.Label>
                        <Form.Control type="email" placeholder="ex.abc@gmail.com" onChange={event => seta_email(event.target.value)} />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPassword">
                        <Form.Label className='frm-lbl'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={event => seta_password(event.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                    <Form.Label className='frm-lbl'>Address</Form.Label>
                    <Form.Control placeholder="ex.1234 Main St" onChange={event => seta_addr(event.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                        <Form.Label className='frm-lbl'>City</Form.Label>
                        <Form.Control placeholder='ex.Pune' onChange={event => seta_city(event.target.value)} />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                        <Form.Label className='frm-lbl'>State</Form.Label>
                        <Form.Select defaultValue="Maharashtra" onChange={event => seta_state(event.target.value)}>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Gujrat</option>
                            <option>Rajasthan</option>
                            <option>Goa</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                        <Form.Label className='frm-lbl'>Zip Code</Form.Label>
                        <Form.Control maxLength={6} placeholder='ex.413709' onChange={event => seta_zip(event.target.value)} />
                    </Form.Group>
                </Row>

                <Button className='adm-sub-btn' variant="primary" type="submit" onClick={onSubmitVal}>
                    Register Admin
                </Button>
            </div>
        </div>

    );
}


export default AdminRegisterForm;
