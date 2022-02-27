import React, { useState } from 'react'
import { Modal, Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import "./ShelterPage.css";

function ShelterPage() {

  let data = JSON.parse(window.localStorage.getItem('data'));


  const [shelterName, setShelterName] = useState("");
  const [shelterCat, setShelterCat] = useState("Dog Shelter");
  const [shelterphno, setShelterPhno] = useState("");
  const [shelterEmail, setShelterEmail] = useState("");
  const [shelterAddr, setShelterAddr] = useState("");
  const [shelterCity, setShelterCity] = useState("");
  const [shelterState, setShelterState] = useState("Maharashtra");
  const [shelterZip, setShelterZip] = useState("");

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const updateshelter = (e) => {
    setShelterName(data.s_name);
    setShelterPhno(data.s_phno);
    setShelterEmail(data.s_email);
    setShelterAddr(data.s_addr);
    setShelterCity(data.s_city);
    setShelterState(data.s_state);
    setShelterZip(data.s_zip);

    setShow(true);
  }

  const handleUpdateshelter = (e) => {
    setLoading(true);
    fetch("http://localhost:3002/updateshelter", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        s_id: data.s_id,
        s_name: shelterName,
        s_phno: shelterphno,
        s_addr: shelterAddr,
        s_city: shelterCity,
        s_state: shelterState,
        s_zip: shelterZip,
        s_cat: shelterCat

      }),
    })
      .then((response) => response.json())
      .then((message) => {
        if (message === 'update done') {
          alert("Record Updated");
          setShow(false);
          setLoading(false);
          const updatedUser = {
            "s_addr": shelterAddr,
            "s_city": shelterCity,
            "s_email": shelterEmail,
            "s_id": data.s_id,
            "s_name": shelterName,
            "s_phno": shelterphno,
            "s_state": shelterState,
            "s_zip": shelterZip,
            "s_cat": shelterCat,
            "type": "Shelter"
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

        <h1>Shelter Dashboard 👤</h1>
        <div className='form-cont'>
          <Row className="mb-3">
            <Form.Group className='frm-grp-fild' as={Col} md="4" controlId="formGridUserName">
              <Form.Label className='frm-lbl'  >Shelter Name </Form.Label><br />
              <Form.Label className='frm-lbl1'  > {data.s_name} </Form.Label>
            </Form.Group>

            <Form.Group className='frm-grp-fild' as={Col} md="4" controlId="formGridPhno">
              <Form.Label className='frm-lbl'>Phone Number</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_phno}</Form.Label>
            </Form.Group>

            <Form.Group className='frm-grp-fild' as={Col} md="4" controlId="formGridPhno">
              <Form.Label className='frm-lbl'>Category</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_cat}</Form.Label>
            </Form.Group>
          </Row>




          <Row className="mb-3">
            <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridEmail">
              <Form.Label className='frm-lbl' >Email</Form.Label><br />
              <Form.Label className='frm-lbl1' >{data.s_email}</Form.Label>

            </Form.Group>

            <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="formGridAddress1">
              <Form.Label className='frm-lbl'>Address</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_addr}</Form.Label>

            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
              <Form.Label className='frm-lbl'>City</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_city}</Form.Label>
            </Form.Group>

            <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
              <Form.Label className='frm-lbl'>State</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_state}</Form.Label>
            </Form.Group>

            <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
              <Form.Label className='frm-lbl'>Zip Code</Form.Label><br />
              <Form.Label className='frm-lbl1'>{data.s_zip}</Form.Label>
            </Form.Group>
          </Row>


          <Button className='reg-sub-btn' variant="primary" type="submit" onClick={updateshelter}>
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

                <h1>Update Shelter Details🐕‍🦺</h1>
                <form onSubmit={handleUpdateshelter} className='form-cont'>
                  <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridShelterName">
                      <Form.Label className='frm-lbl' >Shelter Name</Form.Label>
                      <Form.Control type="text"
                        placeholder="Enter Shelter Name"
                        value={shelterName}
                        onChange={event => setShelterName(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3 frm-grp-fild' as={Col} controlId="formGridtype">
                      <Form.Label className='frm-lbl'>Category</Form.Label>
                      <Form.Select defaultValue={shelterCat}
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
                        value={shelterphno}
                        onChange={event => setShelterPhno(event.target.value)}
                      />
                    </Form.Group>
                  </Row>


                  <Form.Group className="mb-3 frm-grp-fild" controlId="formGridAddress1">
                    <Form.Label className='frm-lbl'>Address</Form.Label>
                    <Form.Control placeholder="ex.1234 Main St"
                      value={shelterAddr}
                      onChange={event => setShelterAddr(event.target.value)}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                      <Form.Label className='frm-lbl'>City</Form.Label>
                      <Form.Control placeholder='ex.Pune'
                        value={shelterCity}
                        onChange={event => setShelterCity(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                      <Form.Label className='frm-lbl'>State</Form.Label>
                      <Form.Select defaultValue={shelterState}
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
                        value={shelterZip}
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
            </Modal.Footer>
          </Modal>



        </div>
      </div>
    </div >
  )
}

export default ShelterPage;