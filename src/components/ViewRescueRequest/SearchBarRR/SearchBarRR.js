import React from 'react';
import './SearchBarRR.css';

const SearchBarRR = ({ setrrssearchfield }) => {

	return (

		<div className="outerdiv">
			<h1 className='f1'>🚨 RESCUE REQUESTS 🚨</h1>
			<input
				className='adosar'
				type='search'
				placeholder='Search With Location Name'
				onChange={event => (setrrssearchfield(event.target.value))}
			/>

		</div>

	);

}

export default SearchBarRR;