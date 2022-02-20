import React from 'react';
import './Card.css'

const Card = (props) => {
	const { id, name, email, catchphrase, phone } = props;
	const type = "Shelter";
	return (
		<div className=' adocrd grow'>
			<img alt='robots' src={`https://robohash.org/${id}?set=set4`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{catchphrase}</p>
				{
					(type === "Shelter")
						?
						<>
							<button className='adop-delete-btn' >Delete</button><br />
							<button className='adop-update-btn' >Update</button>
						</>
						:
						(type === "Admin")
							?
							<>
								<button className='adop-delete-btn' >Delete</button><br />
							</>
							:
							<></>

				}

			</div>
		</div>
	);
}

export default Card;