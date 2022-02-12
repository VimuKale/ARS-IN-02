import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './AdoptionListingForm.css';

const AdoptionListingForm = () => {

    return (
        <div className="ado-li-cont">

            <h1>Adoption Listing 🐕</h1>
            <Form as={Col} className='form-cont'>
                <Row>

                    <Form.Group className="mb-3 frm-grp-fild" as={Col} controlId="shelterName">
                        <Form.Label className='frm-lbl'>Shelter Name</Form.Label>
                        <Form.Control placeholder="ex.Saath Animal Welfare Trust" />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="shelterPhone">
                        <Form.Label className='frm-lbl'>Phone No.</Form.Label>
                        <Form.Control type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}

                            maxLength={10}
                            placeholder="ex.98XXXXX78 [10 digits]" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="shelterEmail">
                        <Form.Label className='frm-lbl' >Shelter Email</Form.Label>
                        <Form.Control type="email" placeholder="ex.shelter@gmail.com" />
                    </Form.Group>

                    <Form.Group className="frm-grp-fild" controlId="shelterdAddress">
                        <Form.Label className='frm-lbl'>Address</Form.Label>
                        <Form.Control placeholder="ex.1234 Main St" />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="shelterCity">
                        <Form.Label className='frm-lbl'>City</Form.Label>
                        <Form.Control placeholder='ex.Pune' />
                    </Form.Group>



                    <Form.Group className='frm-grp-fild' as={Col} controlId="shelterZip">
                        <Form.Label className='frm-lbl'>Zip Code</Form.Label>
                        <Form.Control placeholder='ex.413709' />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className=' mb-3 frm-grp-fild' as={Col} controlId="petName">
                        <Form.Label className='frm-lbl' >Pet Name 🐶</Form.Label>
                        <Form.Control type="text" placeholder="ex.Rocky" />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="petType">
                        <Form.Label className='frm-lbl'>Pet Type</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Row>

                    <Form.Group className="mb-3 frm-grp-fild" controlId="petDescription">
                        <Form.Label className='frm-lbl'>Pet Description</Form.Label>
                        <Form.Control placeholder="Please Write Detail Description " />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" as={Col} controlId="formFile" >
                    <Form.Label className='frm-lbl'>Select Pet Photo</Form.Label>
                    <Form.Control type="file" capture="user" accept="image/png, image/jpeg" />
                </Form.Group>

                <Button className='ado-sub-btn' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
}


export default AdoptionListingForm;