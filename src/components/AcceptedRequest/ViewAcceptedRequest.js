import React, { useState } from 'react';
import Card from './Card';
// import { useState, useEffect } from 'react';
// import "./AdoptionListing.css";


const ViewAcceptedRequest = ({ rrs }) => {

	let data = JSON.parse(window.localStorage.getItem('data'));
	const [show, setShow] = useState(false);
	const [status, setStatus] = useState("Accepted");
	const [statusid, setStatusID] = useState("");
	const handleClose = () => setShow(false);

	const handleupdatestatus = (event) => {
		alert(event.target.value);
		const ind = event.target.value;
		setStatus(rrs[ind].status);
		setStatusID(rrs[ind].status_id);
		setShow(true);
	}

	function UpdateStatus(event) {

		console.log(statusid);

		fetch("http://localhost:3002/updatestatus", {
			method: "put",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				status: status,
				status_id: statusid
			}),
		}).then((response) => response.json())
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
		<div>
			{
				rrs.map((user, i) => {
					return (

						<Card
							key={rrs[i].r_id}

							u_id={rrs[i].u_id}
							u_phno={rrs[i].u_phno}
							u_email={rrs[i].u_email}

							ra_type={rrs[i].ra_type}
							ra_desc={rrs[i].ra_desc}
							ra_loc={rrs[i].ra_loc}
							ra_lm={rrs[i].ra_lm}
							ra_city={rrs[i].ra_city}
							ra_zip={rrs[i].ra_zip}
							petfilename={rrs[i].petfilename}
							r_id={rrs[i].r_id}
							status_id={rrs[i].status_id}
							status={rrs[i].status}
							s_id={rrs[i].s_id}


							UpdateStatus={UpdateStatus}
							handleupdatestatus={handleupdatestatus}

							setStatus={setStatus}
							handleClose={handleClose}
							setShow={setShow}
							show={show}
							inde={i}
						// loading={loading}
						// setLoading={setLoading}

						/>
					);
				})
			}

		</div>
	);
}

export default ViewAcceptedRequest;