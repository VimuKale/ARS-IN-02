import React from 'react';
import './Card.css'
import { Modal, Button, Col, Row, Form } from 'react-bootstrap';

const Card = ({
	u_id,
	u_phno,
	u_email,
	ra_type,
	ra_desc,
	ra_loc,
	ra_lm,
	ra_city,
	ra_zip,
	petfilename,
	r_id,
	UpdateStatus,
	status,
	status_id,
	s_id,
	show,
	handleClose,
	handleupdatestatus,
	inde,
	setStatus
}) => {



	let data = JSON.parse(window.localStorage.getItem('data'));
	return (

		s_id === data.s_id ?
			(
				<div className=' adocrd grow'>

					<div className='img-outer'>
						<img className="img-size" alt='robots' src={`http://localhost:3002/uploads/${petfilename}`} />
					</div>

					<div className='adop-card-info'>
						<p className='p-name'>{ra_type}</p>
						<label className='adop-lbl'>Description :</label>
						<p className='p-desc'>{ra_desc}</p>
						<label className='adop-lbl'>Rescue Location :</label>
						<p className='p-type'>{ra_loc}</p>
						<label className='adop-lbl'>Rescue Landmark:</label>
						<p className='s-name'>{ra_lm}</p>
						<label className='adop-lbl'>Rescue City:</label>
						<p className='s-name'>{ra_city}</p>
						<label className='adop-lbl'>Rescue Zip:</label>
						<p className='s-name'>{ra_zip}</p>
						<label className='adop-lbl'>Rescue Status:</label>
						<p className='s-name'>{status}</p>

						<label className='adop-lbl'>User Contact Details :</label><br />
						<a href={`tel: +91${u_phno}`} className='s-contact'>{u_phno}</a>
						<br />
						<a href={`mailto: ${u_email}`} className='s-contact'>{u_email}</a><br />
						{
							(data.type === "Shelter")
								?
								<>
									<button className='adop-delete-btn' value={inde} onClick={handleupdatestatus} >Update Status</button><br />
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

												<h1>Update Rescue Status🐕‍🦺</h1>
												<form onSubmit={UpdateStatus} className='form-cont'>
													<Row className="mb-3">

														<Form.Group className='mb-3 frm-grp-fild' as={Col} controlId="formGridtype">
															<Form.Label className='frm-lbl'>Status</Form.Label>
															<Form.Select defaultValue={status}
																onChange={event => setStatus(event.target.value)}
															>
																<option>Processing</option>
																<option>Done</option>
																<option>On Hold</option>
																<option>Accepted</option>
															</Form.Select>
														</Form.Group>
													</Row>
													<button type='submit'>Update</button>
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
									</>
									:
									<></>

						}

					</div>
				</div>
			)
			:
			<></>
	);
}

export default Card;