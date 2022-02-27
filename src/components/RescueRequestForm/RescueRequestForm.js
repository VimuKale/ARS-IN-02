import React, { useState } from "react";
import { Col, Row, Form, Button, Spinner } from "react-bootstrap";
import "./RescueRequestForm.css";
import axios from "axios";

// import emailjs from "emailjs-com";

const RescueRequestForm = () => {

  let data = JSON.parse(window.localStorage.getItem('data'));

  const [animalType, setAnimalType] = useState("Dog");
  const [animalDesc, setAnimalDesc] = useState("");
  const [rescueLoc, setRescueLoc] = useState("");
  const [rescueLandmark, setRescueLandmark] = useState("");
  const [rescueCity, setRescuecity] = useState("");
  const [rescueZip, setRescueZip] = useState("");
  const [animalImg, setAnimalImg] = useState("");




  const [loading, setLoading] = useState(false);

  // function sendEmail(e) {
  //   emailjs
  //     .sendForm(
  //       "service_am40ayj",
  //       "template_f6kkbq9",
  //       e.target,
  //       "user_hU6tWtNolaney0jEPrLTY"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  const formData = new FormData();

  formData.append("u_id", data.u_id)
  formData.append("ra_type", animalType);
  formData.append("ra_desc", animalDesc)
  formData.append("ra_loc", rescueLoc);
  formData.append("ra_lm", rescueLandmark);
  formData.append("ra_city", rescueCity);
  formData.append("ra_zip", rescueZip);
  formData.append("petImg", animalImg);


  const handleRescuesubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    axios.post("http://localhost:3002/rescueimage", formData).then(res => {
      if (res.data.message === "success") {
        setLoading(false);
        alert("Rescue Request Submitted");
        // sendEmail(e);
        e.target.reset();

      }
    }).catch(err => {
      setLoading(false);
      alert("Inavalid Data | Something Went Wrong");

    })

  }

  return (
    <div as={Col} className="res-req-cont">
      <h1>Rescue Request ⛑️</h1>

      <form as={Col} className="form-cont" onSubmit={handleRescuesubmit}>
        <Row>

          <Form.Group
            className="mb-3 frm-grp-fild"
            as={Col}
            controlId="reqAnimalType"
          >
            <Form.Label className="frm-lbl">Animal Type</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={e => setAnimalType(e.target.value)}>
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
              onChange={e => setAnimalDesc(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" controlId="reqLocation">
            <Form.Label className="frm-lbl">Rescue Location</Form.Label>
            <Form.Control placeholder="ex.Area/Street etc"
              onChange={e => setRescueLoc(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" controlId="reqLandmark">
            <Form.Label className="frm-lbl">Rescue Landmark</Form.Label>
            <Form.Control placeholder="Please Enter Precise LandMark"
              onChange={e => setRescueLandmark(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="frm-grp-fild" as={Col} controlId="shelterCity">
            <Form.Label className="frm-lbl">City</Form.Label>
            <Form.Control placeholder="ex.Pune"
              onChange={e => setRescuecity(e.target.value)}
            />
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
              onChange={e => setRescueZip(e.target.value)}
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
              onChange={e => setAnimalImg(e.target.files[0])}
            />
          </Form.Group>
        </Row>

        <Button
          type="submit"
          value="send"
          className="btn-primary req-sub-btn"
        >
          {
            loading ? (
              <Spinner animation="border" variant="light" />
            )
              :
              (
                "Submit Rescue Request"
              )
          }
        </Button>
      </form>
    </div>
  );
};

export default RescueRequestForm;