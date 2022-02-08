import React from 'react';
import './Card.css'

const Card = (props) => {
	const {id,name,email,catchphrase,phone} = props;
	return(
		<div className=' adocrd grow'>
			<img alt='robots' src={`https://robohash.org/${id}?set=set4`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
                <p>{phone}</p>
                <p>{catchphrase}</p>
			</div>
		</div>
	);	
}

export default Card;