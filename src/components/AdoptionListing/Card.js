import React from 'react';
import './Card.css'
import { Modal, Button, Col, Row, Form, Spinner } from 'react-bootstrap';

const Card = ({ p_name,
	p_desc,
	p_type,
	s_name,
	s_phno,
	s_email,
	s_addr,
	s_id,
	adop_id,
	deleteAdoption,
	show,
	setShow,
	handleClose,
	updateadoption,
	setPetName,
	setPetType,
	setPetDesc,
	setAdopID,
	inde,
	handleAdoptionUpdate,
	loading,
	setLoading,
	petfilename,
	petType,
	petDesc,
	petName }) => {



	let data = JSON.parse(window.localStorage.getItem('data'));

	return (


		<div className=' adocrd grow'>

			<div className='img-outer'>
				<img className="img-size" alt='robots' src={`http://localhost:3002/uploads/${petfilename}`} />
			</div>

			<div className='adop-card-info'>
				<p className='p-name'>{p_name}</p>
				<label className='adop-lbl'>Pet Description :</label>
				<p className='p-desc'>{p_desc}</p>
				<label className='adop-lbl'>Pet Type :</label>
				<p className='p-type'>{p_type}</p>
				<label className='adop-lbl'>Shelter Name :</label>
				<p className='s-name'>{s_name}</p>
				<label className='adop-lbl'>Shelter Contact Details :</label><br />
				<a href={`tel: +91${s_phno}`} className='s-contact'>{s_phno}</a>
				<br />
				<a href={`mailto: ${s_email}`} className='s-contact'>{s_email}</a><br />
				<label className='adop-lbl'>Shelter Address</label>
				<p className='s-addr'>{s_addr}</p>
				{
					(data.type === "Shelter" && data.s_id === s_id)
						?
						<>
							<button className='adop-delete-btn' value={adop_id} onClick={deleteAdoption} >Delete</button><br />
							<button className='adop-update-btn' value={inde} onClick={updateadoption} >Update</button>

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
									<div className="ado-li-cont">

										<h1>Adoption Listing 🐕</h1>
										<form onSubmit={handleAdoptionUpdate} as={Col} className='form-cont' >

											<Row className="mb-3">
												<Form.Group className=' mb-3 frm-grp-fild' as={Col} >
													<Form.Label className='frm-lbl' >Pet Name 🐶</Form.Label>
													<Form.Control type="text" placeholder="ex.Rocky"
														value={petName}
														onChange={e => setPetName(e.target.value)} />
												</Form.Group>

												<Form.Group className='frm-grp-fild' as={Col} controlId="petType">
													<Form.Label className='frm-lbl'>Pet Type</Form.Label>
													<Form.Select defaultValue={petType} onChange={e => setPetType(e.target.value)}>
														<option>Dog</option>
														<option>Cat</option>
														<option>Other</option>
													</Form.Select>
												</Form.Group>

											</Row>
											<Row>

												<Form.Group className="mb-3 frm-grp-fild" controlId="petDescription">
													<Form.Label className='frm-lbl'>Pet Description</Form.Label>
													<Form.Control placeholder="Please Write Detail Description "
														value={petDesc}
														onChange={e => setPetDesc(e.target.value)} />
												</Form.Group>
											</Row>

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
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>


						</>
						:
						(data.type === "Admin")
							?
							<>
								<button className='adop-delete-btn' value={adop_id} onClick={deleteAdoption}>Delete</button><br />
							</>
							:
							<></>

				}

			</div>
		</div>
	);
}

export default Card;