import React from 'react';
import './SearchBarAR.css';

const SearchBarAR = ({ setrrssearchfield }) => {

	return (

		<div className="outerdiv">
			<h1 className='f1'>🚨 RESCUE REQUESTS 🚨</h1>
			<input
				className='adosar'
				type='search'
				placeholder='Search With Shelter Name'
				onChange={event => (setrrssearchfield(event.target.value))}
			/>

		</div>

	);

}

export default SearchBarAR;