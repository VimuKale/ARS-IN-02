import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './ShelterRegister.css';

const ShelterRegistration = () => {

    return (
        <div className='she-reg-cont'>

            <h1>Shelter Registration🐕‍🦺</h1>
            <Form className='form-cont'>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridShelterName">
                        <Form.Label className='frm-lbl' >Shelter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Shelter Name" />
                    </Form.Group>

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} controlId="formGridtype">
                        <Form.Label className='frm-lbl'>Category</Form.Label>
                        <Form.Select defaultValue="Dog Shelter">
                            <option>Dog Shelter</option>
                            <option>Cat Shelter</option>
                            <option>Cow Shelter</option>
                            <option>Birds Shelter</option>
                            <option>WildLife Shelter</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} md="4" controlId="formGridPhno">
                        <Form.Label className='frm-lbl'>Phone Number</Form.Label>
                        <Form.Control type="text"
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
                        <Form.Control type="email" placeholder="ex.abc@gmail.com" />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPassword">
                        <Form.Label className='frm-lbl'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                    <Form.Label className='frm-lbl'>Address</Form.Label>
                    <Form.Control placeholder="ex.1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                        <Form.Label className='frm-lbl'>City</Form.Label>
                        <Form.Control placeholder='ex.Pune' />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                        <Form.Label className='frm-lbl'>State</Form.Label>
                        <Form.Select defaultValue="Maharashtra">
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Gujrat</option>
                            <option>Rajasthan</option>
                            <option>Goa</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                        <Form.Label className='frm-lbl'>Zip Code</Form.Label>
                        <Form.Control maxLength={6} placeholder='ex.413709' />
                    </Form.Group>
                </Row>


                <Button className='reg-sub-btn' variant="primary" type="submit">
                    Submit
                </Button>




            </Form>
        </div>

    );
}


export default ShelterRegistration;
