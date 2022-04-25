import React, { useState } from 'react';
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
// import axios from "axios";
import './SupplyListingForm.css';

const SupplyListingForm = () => {

    let data = JSON.parse(window.localStorage.getItem('data'));

    const [loading, setLoading] = useState(false);

    const [itemName, setItemName] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [itemQty, setItemQty] = useState("");
    const [itemCost, setItemCost] = useState("");
    const [deliverTo, setDeliverTo] = useState("");
    const [linkToSrc, setLinkToSrc] = useState("");
    const [TimeFrame, setTimeFrame] = useState("Urgently Needed");
    const [itemStatus, setItemStatus] = useState("Yet to be acquired");


    const handlesupplylist = (e) => {
        e.preventDefault();

        if(itemName==="" || itemDesc === "" || itemQty==="" || itemCost===""|| deliverTo === "" || linkToSrc ==="" ||TimeFrame===""||itemStatus===""){
            alert("Fields Seems To Be Empty");
        }else{

            setLoading(true);
        fetch("http://localhost:3002/supplylisting", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                i_name: itemName,
                i_desc: itemDesc,
                i_qty: itemQty,
                i_cost: itemCost,
                deliver_to: deliverTo,
                link_to_source: linkToSrc,
                time_frame: TimeFrame,
                status: itemStatus,
                s_id: data.s_id
            }),
        }).then((response) => response.json())
            .then((res) => {
                if (res === "success") {
                    setLoading(false);
                    alert("Supplies Listed");
                    e.target.reset();
                }
                if (res === "fail") {
                    setLoading(false);
                    alert("Failed To List Supplies");
                    e.target.reset();
                }
            })
            .catch(err => {
                setLoading(false);
                alert("Inavalid Data | Something Went Wrong");

            })


        }

       
        
    }

    return (
        <div className="sup-li-cont">

            <h1>Supply Listing 🦴🏠</h1>
            <h6>The work we do would not be possible without your support.</h6>
            <form onSubmit={handlesupplylist} as={Col} className='form-cont'>
                <Row>
                    <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="ItemName">
                        <Form.Label className='frm-lbl'>Item Name</Form.Label>
                        <Form.Control placeholder="ex.Dog House"
                            onChange={e => setItemName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="ItemDesc">
                        <Form.Label className='frm-lbl'>Item Desc.</Form.Label>
                        <Form.Control type='text' placeholder="Detailed description on an item"
                            onChange={e => setItemDesc(e.target.value)}
                        />
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
                            placeholder="Item Quantity."
                            onChange={e => setItemQty(e.target.value)}
                        />
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
                            placeholder="ex.3500(Approx.)"
                            onChange={e => setItemCost(e.target.value)}
                        />
                    </Form.Group>
                </Row>


                {/* <Row className="mb-3">
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
                </Row> */}




                <Row className="mb-3">
                    <Form.Group className="frm-grp-fild" as={Col} md="6" controlId="DeliverTo">
                        <Form.Label className='frm-lbl'>Deliver To</Form.Label>
                        <Form.Control placeholder="ex.1234 Main St"
                            onChange={e => setDeliverTo(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="LinkToSource">
                        <Form.Label className='frm-lbl'>Link to source</Form.Label>
                        <Form.Control type='text' placeholder='ex.https://Amazon.in/DogHouse1/'
                            onChange={e => setLinkToSrc(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="TimeFrame">
                        <Form.Label className='frm-lbl'>Time Frame</Form.Label>
                        <Form.Select defaultValue="Urgently Needed"
                            onChange={e => setTimeFrame(e.target.value)}
                        >
                            <option>Urgently Needed</option>
                            <option>Moderately urgent</option>
                            <option>Least urgent</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="status">
                        <Form.Label className='frm-lbl'>Status</Form.Label>
                        <Form.Select defaultValue="Yet to be acquired"
                            onChange={e => setItemStatus(e.target.value)}
                        >
                            <option>Yet to be acquired</option>
                            <option>Acquired</option>
                            <option>Partially Acquired</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Button className='sup-sub-btn' variant="primary" type="submit">
                    {
                        loading ? (
                            <Spinner animation="border" variant="light" />
                        )
                            :
                            (
                                "Submit"
                            )
                    }
                </Button>

            </form>
        </div>

    );
}


export default SupplyListingForm;