import React from 'react';
import Card from './Card';
// import "./AdoptionListing.css";


const AdoptionListing = ({robots}) => {
	return(
			<div>
				{
					robots.map((user,i) =>{
						return (
					
							<Card 
								key={i} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email}
								catchphrase={robots[i].company.catchPhrase}
								phone={robots[i].phone}
							/>
						);
					})		
				}	

			</div>
		);
}

export default AdoptionListing;