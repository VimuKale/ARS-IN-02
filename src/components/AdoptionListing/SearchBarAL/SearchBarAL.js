import React, { useRef, useState } from 'react';
import './SearchBarAL.css';
import { useReactToPrint } from 'react-to-print';
import ReportsAdoption from "../../../reports/ReportsAdoption";

const SearchBarAL = ({ setpetssearchfield, pets, setpetstartdate, setpetenddate, petstartdate, petenddate }) => {

	// const [startdate, setstartdate] = useState(new Date());
	// const [enddate, setenddate] = useState(new Date());

	let data = JSON.parse(window.localStorage.getItem('data'));

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});


	const ReportButtons = () => {
		return (
			<>

				<div>
					<input
						type={'date'}
						value={petstartdate}
						onChange={e => (setpetstartdate(e.target.value))}
					/>

					{/* <input
						type={'date'}
						value={petenddate}
						onChange={e => (setpetenddate(e.target.value))}
					/> */}

					{/* <button
					// onClick={() => {
					// 	console.log(startdate, enddate);
					// 	setpetstartdate(startdate);
					// 	setpetenddate(enddate);
					// }}
					>search date wise</button> */}
				</div>

				<div>
					<div style={{ display: "none" }}>
						<ReportsAdoption ref={componentRef} pets={pets} />
					</div>
					<button onClick={handlePrint}>Print this out! </button>
				</div>

			</>

		);
	}



	const Userdecide = () => {
		switch (data.type) {
			case 'Shelter': return (
				<>
					<ReportButtons />
				</>
			);
			case 'Admin': return (
				<>
					<ReportButtons />
				</>
			);
			case 'User': return (
				<>
				</>
			);

			default: return (<>ERROR</>);
		}
	}


	return (
		<>

			<div className="outerdiv">
				<h1 className='f1'>Pet Listed For Adoption</h1>
				<input
					className='adosar'
					type='search'
					placeholder='Search With Shelter Name'
					onChange={event => (setpetssearchfield(event.target.value))}
				/>
				<Userdecide />
			</div>

		</>

	);

}

export default SearchBarAL;