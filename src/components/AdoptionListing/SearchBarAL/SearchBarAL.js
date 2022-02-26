import React from 'react';
import './SearchBarAL.css';

const SearchBarAL = ({ setpetssearchfield }) => {

	return (

		<div className="outerdiv">
			<h1 className='f1'>Pet Listed For Adoption</h1>
			<input
				className='adosar'
				type='search'
				placeholder='Search With Shelter Name'
				onChange={event => (setpetssearchfield(event.target.value))}
			/>

		</div>

	);

}

export default SearchBarAL;