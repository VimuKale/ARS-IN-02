import React, { useState } from 'react';
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import './UserRegister.css';






const UserRegister = () => {


    const [userName, setUserName] = useState("");
    const [userPhno, setUserPhno] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfPassword, setUserConfPassword] = useState("");
    const [userAddr, setUserAddr] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userState, setUserState] = useState("Maharashtra");
    const [userZip, setUserZip] = useState("");

    const [loading, setLoading] = useState(false);

    const handleuserregister = (e) => {
        e.preventDefault();

        if(userName === "" || userPhno === "" || userEmail === "" || userPassword ==="" ||
            userConfPassword === "" || userAddr === "" || userCity === "" || userState === "" ||
            userZip === ""){
                alert("Fields Seems To Be Empty");
            }
        else{
            if (userConfPassword === userPassword) {
                setLoading(true);
                fetch("http://localhost:3002/userregister", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        u_name: userName,
                        u_phno: userPhno,
                        u_email: userEmail,
                        u_password: userPassword,
                        u_addr: userAddr,
                        u_city: userCity,
                        u_state: userState,
                        u_zip: userZip
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

            <h1>User Registration👤</h1>
            <form onSubmit={handleuserregister} className='form-cont'>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridUserName">
                        <Form.Label className='frm-lbl' >User Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter User Name"
                            onChange={event => setUserName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridPhno">
                        <Form.Label className='frm-lbl'>Phone Number</Form.Label>
                        <Form.Control type="text"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}

                            maxLength={10}
                            placeholder="ex.74XXXXXX91 [10 digits]"
                            onChange={event => setUserPhno(event.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridEmail">
                        <Form.Label className='frm-lbl' >Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="ex.abc@gmail.com"
                            onChange={event => setUserEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridPassword">
                        <Form.Label className='frm-lbl'>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={event => setUserPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridconfPassword">
                        <Form.Label className='frm-lbl'>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={event => setUserConfPassword(event.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                    <Form.Label className='frm-lbl'>Address</Form.Label>
                    <Form.Control placeholder="ex.1234 Main St"
                        onChange={event => setUserAddr(event.target.value)}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                        <Form.Label className='frm-lbl'>City</Form.Label>
                        <Form.Control placeholder='ex.Pune'
                            onChange={event => setUserCity(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                        <Form.Label className='frm-lbl'>State</Form.Label>
                        <Form.Select defaultValue="Maharashtra"
                            onChange={event => setUserState(event.target.value)}
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
                        <Form.Control maxLength={6}
                            placeholder='ex.413709'
                            onChange={event => setUserZip(event.target.value)}
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


export default UserRegister;
