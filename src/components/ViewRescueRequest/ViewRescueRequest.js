import React from 'react';
import Card from './Card';
// import { useState, useEffect } from 'react';
// import "./AdoptionListing.css";


const ViewRescueRequest = ({ rrs }) => {

	let data = JSON.parse(window.localStorage.getItem('data'));
	function AcceptRequest(event) {

		fetch("http://localhost:3002/acceptrequest", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				r_id: event.target.value,
				s_id: data.s_id
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

	function DeleteRequest(event) {
		console.log(event.target.value);
		const key = event.target.value;
		fetch("http://localhost:3002/deleterequest", {
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

							AcceptRequest={AcceptRequest}
							DeleteRequest={DeleteRequest}

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

export default ViewRescueRequest;