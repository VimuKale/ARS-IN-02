import React from 'react';
import Card from './Card';
// import { useState, useEffect } from 'react';
// import "./AdoptionListing.css";


const ViewAcceptedRequest = ({ rrs }) => {

	let data = JSON.parse(window.localStorage.getItem('data'));



	function UpdateStatus(event) {
		fetch("http://localhost:3002/updatestatus", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({

			}),
		}).then((response) => response.json())
			.then((res) => {
				if (res === "success") {

					alert("Request Accepted");

				}
				if (res === "fail") {

					alert("Failed To Accept Request");

				}
			})
			.catch(err => {

				alert("Inavalid Data | Something Went Wrong");

			})
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


							UpdateStatus={UpdateStatus}

						// handleClose={handleClose}
						// setShow={setShow}
						// show={show}
						// inde={i}
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