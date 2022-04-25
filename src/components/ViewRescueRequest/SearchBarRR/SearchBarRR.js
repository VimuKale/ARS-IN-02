import React, { useRef } from 'react';
import './SearchBarRR.css';
import { useReactToPrint } from 'react-to-print';
import ReportsRescueRequest from '../../../reports/ReportsRescueRequest';

const SearchBarRR = ({ setrrssearchfield, rrs, rescuestartdate, rescueenddate, setrescuestartdate, setrescueenddate }) => {

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
						value={rescuestartdate}
						onChange={e => (setrescuestartdate(e.target.value))}
					/>

					<input
						type={'date'}
						value={rescueenddate}
						onChange={e => (setrescueenddate(e.target.value))}
					/>

					<button>search date wise</button>
				</div>

				<div>
					<div style={{ display: "none" }}>
						<ReportsRescueRequest ref={componentRef} rrs={rrs} />
					</div>
					<button onClick={handlePrint}>Print this out!</button>
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

		<div className="outerdiv">
			<h1 className='f1'>🚨 RESCUE REQUESTS 🚨</h1>
			<input
				className='adosar'
				type='search'
				placeholder='Search With Location Name'
				onChange={event => (setrrssearchfield(event.target.value))}
			/>
			<Userdecide />

		</div>

	);

}

export default SearchBarRR;