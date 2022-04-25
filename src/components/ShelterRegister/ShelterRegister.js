import React, { useState } from 'react';
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import './ShelterRegister.css';

const ShelterRegistration = () => {

    const [shelterName, setShelterName] = useState("");
    const [shelterCat, setShelterCat] = useState("Dog Shelter");
    const [shelterphno, setShelterPhno] = useState("");
    const [shelterEmail, setShelterEmail] = useState("");
    const [shelterPassword, setShelterPassword] = useState("");
    const [shelterConfPassword, setShelterConfPassword] = useState("");
    const [shelterAddr, setShelterAddr] = useState("");
    const [shelterCity, setShelterCity] = useState("");
    const [shelterState, setShelterState] = useState("Maharashtra");
    const [shelterZip, setShelterZip] = useState("");

    const [loading, setLoading] = useState(false);

    const handleshelterregister = (e) => {
        e.preventDefault();

        if(shelterName === "" || shelterCat === "" || shelterphno === "" || 
        shelterEmail === "" || shelterPassword === "" || shelterConfPassword ===""||
        shelterAddr === "" || shelterCity === "" || shelterState === "" || shelterZip === ""){
            alert("Fields Seems To Be Empty");
        }
        else{
            if (shelterConfPassword === shelterPassword) {
                setLoading(true);
                fetch("http://localhost:3002/shelterregister", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        s_name: shelterName,
                        s_phno: shelterphno,
                        s_cat: shelterCat,
                        s_email: shelterEmail,
                        s_password: shelterPassword,
                        s_addr: shelterAddr,
                        s_city: shelterCity,
                        s_state: shelterState,
                        s_zip: shelterZip
                    }),
                }).then((response) => response.json())
                    .then((res) => {
                        setLoading(false);
                        alert("User Registered");
                        e.target.reset();
                        if (res === "unable to register") {
                            setLoading(false);
                            alert("Failed To Register User");
                            e.target.reset();
                        }
                    })
                    .catch(err => {
                        setLoading(false);
                        alert("Inavalid Data | Something Went Wrong");
    
                    })
            } else {
                alert("PASSWORD & CONFIRM PASSWORD DIDN'T MATCH")
            }
        }

        


    }












    return (
        <div className='she-reg-cont'>

            <h1>Shelter Registration🐕‍🦺</h1>
            <form onSubmit={handleshelterregister} className='form-cont'>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridShelterName">
                        <Form.Label className='frm-lbl' >Shelter Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Shelter Name"
                            onChange={event => setShelterName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} controlId="formGridtype">
                        <Form.Label className='frm-lbl'>Category</Form.Label>
                        <Form.Select defaultValue="Dog Shelter"
                            onChange={event => setShelterCat(event.target.value)}
                        >
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
                            placeholder="ex.74XXXXXX91 [10 digits]"
                            onChange={event => setShelterPhno(event.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridEmail">
                        <Form.Label className='frm-lbl' >Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="ex.abc@gmail.com"
                            onChange={event => setShelterEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPassword">
                        <Form.Label className='frm-lbl'>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={event => setShelterPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridConfPassword">
                        <Form.Label className='frm-lbl'>Confirm Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={event => setShelterConfPassword(event.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                    <Form.Label className='frm-lbl'>Address</Form.Label>
                    <Form.Control placeholder="ex.1234 Main St"
                        onChange={event => setShelterAddr(event.target.value)}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                        <Form.Label className='frm-lbl'>City</Form.Label>
                        <Form.Control placeholder='ex.Pune'
                            onChange={event => setShelterCity(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                        <Form.Label className='frm-lbl'>State</Form.Label>
                        <Form.Select defaultValue="Maharashtra"
                            onChange={event => setShelterState(event.target.value)}
                        >
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Gujrat</option>
                            <option>Rajasthan</option>
                            <option>Goa</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                        <Form.Label className='frm-lbl'>Zip Code</Form.Label>
                        <Form.Control maxLength={6} placeholder='ex.413709'
                            onChange={event => setShelterZip(event.target.value)}
                        />
                    </Form.Group>
                </Row>


                <Button className='reg-sub-btn' variant="primary" type="submit">
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


export default ShelterRegistration;
