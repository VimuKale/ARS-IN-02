import React from 'react';
import Card from './Card';
import { useState } from 'react';

// import "./AdoptionListing.css";


const AdoptionListing = ({ pets }) => {


	const [show, setShow] = useState(false);

	const [loading, setLoading] = useState(false);

	const [petName, setPetName] = useState("");
	const [petType, setPetType] = useState("");
	const [petDesc, setPetDesc] = useState("");
	const [adopID, setAdopID] = useState("");

	const handleClose = () => setShow(false);

	function deleteAdoption(event) {
		console.log(event.target.value);
		const key = event.target.value;
		fetch("http://localhost:3002/deleteadoption", {
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


	function updateadoption(event) {

		alert(event.target.value);

		const ind = event.target.value;

		setPetName(pets[ind].p_name);
		// console.log(pets[ind].p_type)
		setPetType(pets[ind].p_type);
		setPetDesc(pets[ind].p_desc);
		setAdopID(pets[ind].adop_id);

		setShow(true);
	}

	function handleAdoptionUpdate() {
		setLoading(true);
		fetch("http://localhost:3002/updateadoption", {
			method: "put",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({

				adop_id: adopID,
				p_name: petName,
				p_type: petType,
				p_desc: petDesc,

			}),
		})
			.then((response) => response.json())
			.then((message) => {
				if (message === 'update done') {
					alert("Record Updated");
					setLoading(false);
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
				pets.map((user, i) => {
					return (

						<Card
							key={pets[i].adop_id}
							p_name={pets[i].p_name}
							p_desc={pets[i].p_desc}
							p_type={pets[i].p_type}
							s_name={pets[i].s_name}
							s_phno={pets[i].s_phno}
							s_email={pets[i].s_email}
							s_addr={pets[i].s_addr}
							s_id={pets[i].s_id}
							petfilename={pets[i].petfilename}
							adop_id={pets[i].adop_id}
							deleteAdoption={deleteAdoption}
							handleAdoptionUpdate={handleAdoptionUpdate}
							updateadoption={updateadoption}
							handleClose={handleClose}
							setShow={setShow}
							show={show}
							setPetName={setPetName}
							setPetType={setPetType}
							setPetDesc={setPetDesc}
							setAdopID={setAdopID}
							inde={i}
							loading={loading}
							setLoading={setLoading}
							petName={petName}
							petType={petType}
							petDesc={petDesc}

						/>
					);
				})
			}

		</div>
	);
}

export default AdoptionListing;