import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./RescueRequestForm.css";
import emailjs from "emailjs-com";

const RescueRequestForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_am40ayj",
        "template_f6kkbq9",
        e.target,
        "user_hU6tWtNolaney0jEPrLTY"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div as={Col} className="res-req-cont">
      <h1>Rescue Request ⛑️</h1>

      <form as={Col} className="form-cont" onSubmit={sendEmail}>
        <Row>
          <Form.Group
            className="mb-3 frm-grp-fild"
            as={Col}
            controlId="userName"
          >
            <Form.Label className="frm-lbl">Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group
            className="mb-3 frm-grp-fild"
            as={Col}
            controlId="userEmail"
          >
            <Form.Label className="frm-lbl">Email Id</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="ex.Shelter@gmail.com"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="frm-grp-fild" as={Col} controlId="userPhone">
            <Form.Label className="frm-lbl">Phone No.</Form.Label>
            <Form.Control
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength={10}
              placeholder="ex.98XXXXX78 [10 digits]"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 frm-grp-fild"
            as={Col}
            controlId="reqAnimalType"
          >
            <Form.Label className="frm-lbl">Animal Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Dog</option>
              <option>Cat</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            className=" frm-grp-fild"
            controlId="reqAnimalDescription"
          >
            <Form.Label className="frm-lbl">Animal Description</Form.Label>
            <Form.Control
              type="text"
              name="message"
              placeholder="Please Write Detail Description "
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" controlId="reqLocation">
            <Form.Label className="frm-lbl">Rescue Location</Form.Label>
            <Form.Control placeholder="ex.Area/Street etc" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" controlId="reqLandmark">
            <Form.Label className="frm-lbl">Rescue Landmark</Form.Label>
            <Form.Control placeholder="Please Enter Precise LandMark" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" as={Col} controlId="shelterCity">
            <Form.Label className="frm-lbl">City</Form.Label>
            <Form.Control placeholder="ex.Pune" />
          </Form.Group>

          <Form.Group className="frm-grp-fild" as={Col} controlId="shelterZip">
            <Form.Label className="frm-lbl">Zip</Form.Label>
            <Form.Control
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength={6}
              placeholder="ex.413709"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            className="mb-3 frm-grp-fild"
            as={Col}
            controlId="animalPhoto"
          >
            <Form.Label className="frm-lbl">
              Upload Photo(Animal to be Rescued)
            </Form.Label>
            <Form.Control
              type="file"
              capture="user"
              accept="image/png, image/jpeg"
            />
          </Form.Group>
        </Row>

        <Button
          type="submit"
          value="send"
          className="btn-primary req-sub-btn"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RescueRequestForm;