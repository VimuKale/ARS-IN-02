import React, { useState } from "react";
import { Fragment } from "react";
import { Modal, Button, Col, Row, Form } from 'react-bootstrap';
import "./ThingsTable.css";
import '../SupplyListingForm/SupplyListingForm.css';
// import axios from "axios";


const ThingsTable = ({ things }) => {

  let data = JSON.parse(window.localStorage.getItem('data'));

  const [show, setShow] = useState(false);

  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [itemDeliverTO, setDeliverTo] = useState("");
  const [itemLinkToSource, setLinkToSource] = useState("");
  const [itemTimeFrame, setTimeFrame] = useState("");
  const [itemStatus, setStatus] = useState("");
  const [itemid, setItemid] = useState("");


  const handleClose = () => setShow(false);



  function deletesupplies(event) {
    console.log(event.target.value);
    const key = event.target.value;
    fetch("http://localhost:3002/deletesupplies", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        key: key,
      }),
    })
      .then((response) => response.json())
      .then(data => {
        if (data === 0) {
          alert("No Record Found");
        } else {
          console.log(data);
          alert("Item Deleted", data);
          window.location.reload(false);
        }

      });
  }

  function updatesupplies(event) {

    alert(event.target.value);

    const ind = event.target.value;

    setItemName(things[ind].i_name);
    setItemDesc(things[ind].i_desc);
    setItemQty(things[ind].i_qty);
    setItemCost(things[ind].i_cost);
    setDeliverTo(things[ind].deliver_to);
    setLinkToSource(things[ind].link_to_source);
    setTimeFrame(things[ind].time_frame);
    setStatus(things[ind].status);
    setItemid(things[ind].i_id);
    setShow(true);
  }

  function handleSupplyUpdate() {
    fetch("http://localhost:3002/updatesupplies", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        i_id: itemid,
        i_name: itemName,
        i_desc: itemDesc,
        i_qty: itemQty,
        i_cost: itemCost,
        deliver_to: itemDeliverTO,
        link_to_source: itemLinkToSource,
        time_frame: itemTimeFrame,
        status: itemStatus

      }),
    })
      .then((response) => response.json())
      .then((message) => {
        if (message === 'update done') {
          alert("Record Updated");
          setShow(false);
          window.location.reload(false);

        } else {
          alert("Failed To Update Record");
        }
      })
      .catch((err) => alert("Failed To Update Record!"));
  }


  return (
    <Fragment>
      <div className="table-responsive tbl-reg-cont">
        <table className="pa3 shadow-5 br4">
          <thead>
            <tr className="outline-transparent-l">
              <th>ID</th>
              <th className="al">Shelter Name</th>
              <th className="al">Shelter Email</th>
              <th className="al">Item Name</th>
              <th className="al">Item Desc</th>
              <th className="al">Item Qty.</th>
              <th className="al">Item Cost(Approx.)</th>
              <th className="al">Deliver To</th>
              <th className="al">Link To Source</th>
              <th className="al">PhNO:</th>
              <th className="al">Time Frame</th>
              <th className="al">Status</th>
            </tr>
          </thead>
          <tbody>
            {things.map((thing, i) => {
              return (
                <tr key={things[i].i_id}>
                  <td className="b-l grow">{i + 1}</td>
                  <td className="al grow">{things[i].s_name}</td>
                  <td className="al grow">{things[i].s_email}</td>
                  <td className="al grow">{things[i].i_name}</td>
                  <td className="al grow">{things[i].i_desc}</td>
                  <td className="al grow">{things[i].i_qty}</td>
                  <td className="al grow">{things[i].i_cost}</td>
                  <td className="al grow copy" title="Click to Copy" onClick={() => { navigator.clipboard.writeText(things[i].deliver_to); alert(`Text Copied : ${things[i].deliver_to}`); }}>{things[i].deliver_to}</td>
                  <td>
                    <a
                      href={things[i].link_to_source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href={`tel: +91${things[i].s_phno}`}>{things[i].s_phno}</a>
                  </td>
                  <td className="al grow">{things[i].time_frame}</td>
                  <td className="al grow">{things[i].status}</td>

                  {


                    (data.type === "Shelter" && data.s_id === things[i].s_id) ?
                      <td>
                        <div>
                          <button className='tbl-delete-btn' value={things[i].i_id} onClick={deletesupplies}>Delete</button><br />
                          <button className='tbl-update-btn' value={i} onClick={updatesupplies}>Update</button>
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
                              <div className="sup-li-cont">

                                <h1>Supply Listing Update 🦴🏠</h1>
                                <h6>The work we do would not be possible without your support.</h6>
                                <Form as={Col} className='form-cont'>
                                  <Row>
                                    <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="ItemName">
                                      <Form.Label className='frm-lbl'>Item Name</Form.Label>
                                      <Form.Control
                                        placeholder="ex.Dog House"
                                        value={itemName}
                                        onChange={event => setItemName(event.target.value)} />
                                    </Form.Group>

                                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="ItemDesc">
                                      <Form.Label className='frm-lbl'>Item Desc.</Form.Label>
                                      <Form.Control
                                        type='text'
                                        placeholder="Detailed description on an item"
                                        value={itemDesc}
                                        onChange={event => setItemDesc(event.target.value)}
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
                                        value={itemQty}
                                        onChange={event => setItemQty(event.target.value)}
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
                                        value={itemCost}
                                        onChange={event => setItemCost(event.target.value)}
                                      />
                                    </Form.Group>
                                  </Row>
                                  <Row className="mb-3">
                                    <Form.Group className="frm-grp-fild" as={Col} md="6" controlId="DeliverTo">
                                      <Form.Label className='frm-lbl'>Deliver To</Form.Label>
                                      <Form.Control placeholder="ex.1234 Main St"
                                        value={itemDeliverTO}
                                        onChange={event => setDeliverTo(event.target.value)}
                                      />
                                    </Form.Group>
                                    <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="LinkToSource">
                                      <Form.Label className='frm-lbl'>Link to source</Form.Label>
                                      <Form.Control type='text' placeholder='ex.https://Amazon.in/DogHouse1/'
                                        value={itemLinkToSource}
                                        onChange={event => setLinkToSource(event.target.value)}
                                      />
                                    </Form.Group>
                                  </Row>

                                  <Row className="mb-3">

                                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="TimeFrame">
                                      <Form.Label className='frm-lbl'>Time Frame</Form.Label>
                                      <Form.Select
                                        defaultValue={itemTimeFrame}
                                        onChange={event => setTimeFrame(event.target.value)}>
                                        <option>Urgently Needed</option>
                                        <option>Moderately urgent</option>
                                        <option>Least urgent</option>
                                      </Form.Select>
                                    </Form.Group>

                                    <Form.Group className='mb-3 frm-grp-fild' as={Col} md="6" controlId="status">
                                      <Form.Label className='frm-lbl'>Status</Form.Label>
                                      <Form.Select
                                        defaultValue={itemStatus}
                                        onChange={event => setStatus(event.target.value)}
                                      >
                                        <option>Yet to be acquired</option>
                                        <option>Acquired</option>
                                        <option>Partially Acquired</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Row>


                                  <Button className='sup-sub-btn' variant="primary" type="submit" onClick={handleSupplyUpdate}>
                                    Update
                                  </Button>

                                </Form>
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
                      </td>
                      :
                      (data.type === "Admin") ?
                        <td>
                          <div>
                            <button className='tbl-delete-btn' value={things[i].i_id} onClick={deletesupplies} >Delete</button><br />
                          </div>
                        </td>
                        :
                        <></>

                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ThingsTable;
