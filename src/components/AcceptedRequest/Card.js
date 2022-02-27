import React from 'react';
import './Card.css'
// import { Modal, Button, Col, Row, Form, Spinner } from 'react-bootstrap';

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
}) => {



	let data = JSON.parse(window.localStorage.getItem('data'));

	return (


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
							<button className='adop-delete-btn' value={status_id} onClick={UpdateStatus} >Update Status</button><br />

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
	);
}

export default Card;