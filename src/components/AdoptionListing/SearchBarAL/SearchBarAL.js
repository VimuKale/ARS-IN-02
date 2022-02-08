import React from 'react';
import './SearchBarAL.css';

const SearchBarAL = ({searchChange}) => {

	return(

		<div className="outerdiv">
            <h1 className='f1'>Adoption Listing</h1>
			<input 
				className='adosar'
				type='search' 
				placeholder='Search With Shelter Name' 
				onChange={searchChange}
			/> 

		</div>	

		);

}

export default SearchBarAL;