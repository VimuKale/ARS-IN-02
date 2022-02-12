import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import './SupplyListingForm.css';

const SupplyListingForm = () => {

    return (
        <div className="sup-li-cont">

            <h1>Supply Listing 🦴🏠</h1>
            <h6>The work we do would not be possible without your support.</h6>
            <Form as={Col} className='form-cont'>

                <Row>
                    <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="ItemName">
                        <Form.Label className='frm-lbl'>Item Name</Form.Label>
                        <Form.Control placeholder="ex.Dog House" />
                    </Form.Group>
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="ItemDesc">
                        <Form.Label className='frm-lbl'>Item Desc.</Form.Label>
                        <Form.Control type='text' placeholder="Detailed description on an item" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="ItemQty">
                        <Form.Label className='frm-lbl' >Item Qty.</Form.Label>
                        <Form.Control type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            maxLength={2}
                            placeholder="Item Quantity." />
                    </Form.Group>
                    <Form.Group className='mb-3 ml-5 frm-grp-fild' as={Col} md="6" controlId="EstimCost">
                        <Form.Label className='frm-lbl' >Est.Cost</Form.Label>
                        <Form.Control type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            maxLength={6}
                            placeholder="ex.3500(Approx.)" />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="shelterEmail">
                        <Form.Label className='frm-lbl' >Shelter Email</Form.Label>
                        <Form.Control type="email" placeholder="ex.Shelter@gmail.com" />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="ShelterPhone">
                        <Form.Label className='frm-lbl'>Phone No.</Form.Label>
                        <Form.Control type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            maxLength={10}
                            placeholder="ex.98XXXXXX78 [10 digits]" />
                    </Form.Group>
                </Row>




                <Row className="mb-3">
                    <Form.Group className="frm-grp-fild" as={Col} md="6" controlId="DeliverTo">
                        <Form.Label className='frm-lbl'>Deliver To</Form.Label>
                        <Form.Control placeholder="ex.1234 Main St" />
                    </Form.Group>
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="LinkToSource">
                        <Form.Label className='frm-lbl'>Link to source</Form.Label>
                        <Form.Control type='text' placeholder='ex.https://Amazon.in/DogHouse1/' />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="TimeFrame">
                        <Form.Label className='frm-lbl'>Time Frame</Form.Label>
                        <Form.Select defaultValue="Urgently Needed">
                            <option>Urgently Needed</option>
                            <option>Moderately urgent</option>
                            <option>Least urgent</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="status">
                        <Form.Label className='frm-lbl'>Status</Form.Label>
                        <Form.Select defaultValue="Yet to be acquired">
                            <option>Yet to be acquired</option>
                            <option>Acquired</option>
                            <option>Partially Acquired</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Button className='sup-sub-btn' variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>

    );
}


export default SupplyListingForm;