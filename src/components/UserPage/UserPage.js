import React, { useState } from "react";
import { Modal, Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import "./UserPage.css";
function UserPage() {
  let data = JSON.parse(window.localStorage.getItem('data'));

  const [userName, setUserName] = useState("");
  const [userPhno, setUserPhno] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddr, setUserAddr] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("Maharashtra");
  const [userZip, setUserZip] = useState("");

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const updateuser = (e) => {
    setUserName(data.u_name);
    setUserPhno(data.u_phno);
    setUserEmail(data.u_email);
    setUserAddr(data.u_addr);
    setUserCity(data.u_city);
    setUserState(data.u_state);
    setUserZip(data.u_zip);

    setShow(true);
  }


  const handleUpdateuser = (e) => {
    setLoading(true);
    fetch("http://localhost:3002/updateuser", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        u_id: data.u_id,
        u_name: userName,
        u_phno: userPhno,
        u_addr: userAddr,
        u_city: userCity,
        u_state: userState,
        u_zip: userZip,

      }),
    })
      .then((response) => response.json())
      .then((message) => {
        if (message === 'update done') {
          alert("Record Updated");
          setShow(false);
          setLoading(false);
          const updatedUser = {
            "u_addr": userAddr,
            "u_city": userCity,
            "u_email": userEmail,
            "u_id": data.u_id,
            "u_name": userName,
            "u_phno": userPhno,
            "u_state": userState,
            "u_zip": userZip,
            "type": "User"
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
    <div className='she-reg-cont'>

      <h1>User Dashboard👤</h1>
      <div className='form-cont'>
        <Row className="mb-3">
          <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridUserName">
            <Form.Label className='frm-lbl'  >User Name </Form.Label><br />
            <Form.Label className='frm-lbl1'  > {data.u_name} </Form.Label>
          </Form.Group>

          <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridPhno">
            <Form.Label className='frm-lbl'>Phone Number</Form.Label><br />
            <Form.Label className='frm-lbl1'>{data.u_phno}</Form.Label>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridEmail">
            <Form.Label className='frm-lbl' >Email</Form.Label><br />
            <Form.Label className='frm-lbl1' >{data.u_email}</Form.Label>

          </Form.Group>

          <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="formGridAddress1">
            <Form.Label className='frm-lbl'>Address</Form.Label><br />
            <Form.Label className='frm-lbl1'>{data.u_addr}</Form.Label>

          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
            <Form.Label className='frm-lbl'>City</Form.Label><br />
            <Form.Label className='frm-lbl1'>{data.u_city}</Form.Label>
          </Form.Group>

          <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
            <Form.Label className='frm-lbl'>State</Form.Label><br />
            <Form.Label className='frm-lbl1'>{data.u_state}</Form.Label>
          </Form.Group>

          <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
            <Form.Label className='frm-lbl'>Zip Code</Form.Label><br />
            <Form.Label className='frm-lbl1'>{data.u_zip}</Form.Label>
          </Form.Group>
        </Row>


        <Button className='reg-sub-btn' variant="primary" type="submit" onClick={updateuser}>
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
            <div className='she-reg-cont'>

              <h1>Update User Details👤</h1>
              <form onSubmit={handleUpdateuser} className='form-cont'>
                <Row className="mb-3">
                  <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridUserName">
                    <Form.Label className='frm-lbl' >User Name</Form.Label>
                    <Form.Control type="text"
                      placeholder="Enter User Name"
                      value={userName}
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
                      value={userPhno}
                      onChange={event => setUserPhno(event.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                  <Form.Label className='frm-lbl'>Address</Form.Label>
                  <Form.Control placeholder="ex.1234 Main St"
                    value={userAddr}
                    onChange={event => setUserAddr(event.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                    <Form.Label className='frm-lbl'>City</Form.Label>
                    <Form.Control placeholder='ex.Pune'
                      value={userCity}
                      onChange={event => setUserCity(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                    <Form.Label className='frm-lbl'>State</Form.Label>
                    <Form.Select defaultValue={userState}
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
                      value={userZip}
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
                        "Update"
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
            {/* <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </Modal>




      </div>
    </div>
  );
}

export default UserPage;