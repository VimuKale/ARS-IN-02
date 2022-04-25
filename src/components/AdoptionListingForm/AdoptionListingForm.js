import React, { useState } from 'react';
import axios from "axios";
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import './AdoptionListingForm.css';

const AdoptionListingForm = () => {

    let data = JSON.parse(window.localStorage.getItem('data'));

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("Dog");
    const [petDesc, setPetDesc] = useState("");
    const [petImage, setPetImage] = useState("");

    const [loading, setLoading] = useState(false);

    const formData = new FormData();

    formData.append("p_name", petName);
    formData.append("p_type", petType)
    formData.append("p_desc", petDesc);
    formData.append("petImg", petImage);
    formData.append("s_id", data.s_id)

    const handlepetlist = (e) => {

        e.preventDefault();

        if(petName===""||petType === "" || petDesc === "" || petImage === ""){
            alert("Fields Seems To Be Empty");
        }else{

            setLoading(true);

        axios.post("http://localhost:3002/adoptionimage", formData).then(res => {
            if (res.data.message === "success") {
                setLoading(false);
                alert("Pet Listed For Adoption");
                e.target.reset();

            }
        }).catch(err => {
            setLoading(false);
            alert("Inavalid Data | Something Went Wrong");

        })

        }  

    }

    return (
        <div className="ado-li-cont">

            <h1>Adoption Listing 🐕</h1>
            <form onSubmit={handlepetlist} as={Col} className='form-cont' >

                <Row className="mb-3">
                    <Form.Group className=' mb-3 frm-grp-fild' as={Col} controlId="petName">
                        <Form.Label className='frm-lbl' >Pet Name 🐶</Form.Label>
                        <Form.Control type="text" placeholder="ex.Rocky" onChange={e => setPetName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className='frm-grp-fild' as={Col} controlId="petType">
                        <Form.Label className='frm-lbl'>Pet Type</Form.Label>
                        <Form.Select defaultValue="Dog" onChange={e => setPetType(e.target.value)}>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Row>

                    <Form.Group className="mb-3 frm-grp-fild" controlId="petDescription">
                        <Form.Label className='frm-lbl'>Pet Description</Form.Label>
                        <Form.Control placeholder="Please Write Detail Description " onChange={e => setPetDesc(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 frm-grp-fild" as={Col} controlId="formFile" >
                    <Form.Label className='frm-lbl'>Select Pet Photo</Form.Label>
                    <Form.Control type="file" capture="user" accept="image/png, image/jpeg" onChange={e => setPetImage(e.target.files[0])} />
                </Form.Group>

                <Button type="submit" className='ado-sub-btn' variant="primary" >
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


export default AdoptionListingForm;