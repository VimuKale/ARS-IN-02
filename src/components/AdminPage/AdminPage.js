import React, { useState } from 'react'
import { Modal, Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import "./AdminPage.css";

function AdminPage() {

    let data = JSON.parse(window.localStorage.getItem('data'));

    const [a_name, seta_name] = useState("");
    const [a_phno, seta_phno] = useState("");
    const [a_email, seta_email] = useState("");
    const [a_addr, seta_addr] = useState("");
    const [a_city, seta_city] = useState("");
    const [a_state, seta_state] = useState("Maharashtra");
    const [a_zip, seta_zip] = useState("");

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const updateadmin = (e) => {
        seta_name(data.a_name);
        seta_phno(data.a_phno);
        seta_email(data.a_email);
        seta_addr(data.a_addr);
        seta_city(data.a_city);
        seta_state(data.a_state);
        seta_zip(data.a_zip);

        setShow(true);
    }


    const handleUpdateadmin = (e) => {
        setLoading(true);
        fetch("http://localhost:3002/updateadmin", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({

                a_id: data.a_id,
                a_name: a_name,
                a_phno: a_phno,
                a_addr: a_addr,
                a_city: a_city,
                a_state: a_state,
                a_zip: a_zip,

            }),
        })
            .then((response) => response.json())
            .then((message) => {
                if (message === 'update done') {
                    alert("Record Updated");
                    setShow(false);
                    setLoading(false);
                    const updatedUser = {
                        "a_addr": a_addr,
                        "a_city": a_city,
                        "a_email": a_email,
                        "a_id": data.a_id,
                        "a_name": a_name,
                        "a_phno": a_phno,
                        "a_state": a_state,
                        "a_zip": a_zip,
                        "type": "Admin"
                    }
                    window.localStorage.setItem('data', JSON.stringify(updatedUser));
                    window.location.reload(false);

                } else {
                    alert("Failed To Update Record");
                    setLoading(true);
                }
            })
            .catch((err) => alert("Failed To Update Record!"));

    }


    return (
        <div>
            <div className='she-reg-cont'>

                <h1>Admin Dashboard 👤</h1>
                <div className='form-cont'>
                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridUserName">
                            <Form.Label className='frm-lbl'  >Admin Name </Form.Label><br />
                            <Form.Label className='frm-lbl1'  > {data.a_name} </Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridPhno">
                            <Form.Label className='frm-lbl'>Phone Number</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_phno}</Form.Label>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridEmail">
                            <Form.Label className='frm-lbl' >Email</Form.Label><br />
                            <Form.Label className='frm-lbl1' >{data.a_email}</Form.Label>

                        </Form.Group>

                        <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="formGridAddress1">
                            <Form.Label className='frm-lbl'>Address</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_addr}</Form.Label>

                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                            <Form.Label className='frm-lbl'>City</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_city}</Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                            <Form.Label className='frm-lbl'>State</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_state}</Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                            <Form.Label className='frm-lbl'>Zip Code</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_zip}</Form.Label>
                        </Form.Group>
                    </Row>


                    <Button className='reg-sub-btn' variant="primary" type="submit" onClick={updateadmin}>
                        Update
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        fullscreen={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='adm-reg-cont'>

                                <h1>Update Admin Details🛡️</h1>
                                <form onSubmit={handleUpdateadmin} className='form-cont'>
                                    <Row className="mb-3">
                                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridAdminName">
                                            <Form.Label className='frm-lbl' >Admin Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Admin Name"
                                                value={a_name}
                                                onChange={event => seta_name(event.target.value)} />
                                        </Form.Group>

                                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPhNo">
                                            <Form.Label className='frm-lbl'>Phone No.</Form.Label>
                                            <Form.Control type="text"
                                                value={a_phno}
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

                                    <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                                        <Form.Label className='frm-lbl'>Address</Form.Label>
                                        <Form.Control placeholder="ex.1234 Main St"
                                            value={a_addr}
                                            onChange={event => seta_addr(event.target.value)} />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                                            <Form.Label className='frm-lbl'>City</Form.Label>
                                            <Form.Control placeholder='ex.Pune'
                                                value={a_city}
                                                onChange={event => seta_city(event.target.value)} />
                                        </Form.Group>

                                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                                            <Form.Label className='frm-lbl'>State</Form.Label>
                                            <Form.Select defaultValue={a_state} onChange={event => seta_state(event.target.value)}>
                                                <option>Maharashtra</option>
                                                <option>Delhi</option>
                                                <option>Gujrat</option>
                                                <option>Rajasthan</option>
                                                <option>Goa</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                                            <Form.Label className='frm-lbl'>Zip</Form.Label>
                                            <Form.Control maxLength={6} placeholder='ex.413709'
                                                value={a_zip}
                                                onChange={event => seta_zip(event.target.value)} />
                                        </Form.Group>
                                    </Row>

                                    <Button className='adm-sub-btn' variant="primary" type="submit">
                                        {
                                            loading ? (
                                                <Spinner animation="border" variant="light" />
                                            )
                                                :
                                                (
                                                    "Update Admin"
                                                )
                                        }
                                    </Button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>




                </div>
            </div>
        </div>
    )
}

export default AdminPage;