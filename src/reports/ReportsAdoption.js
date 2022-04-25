import React, { Component } from 'react'

export default class ReportsAdoption extends Component {
    render() {
        const pets = this.props.pets
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Adoption Report</h1>
                <hr />
                <table >
                    <thead style={{ textAlign: 'left' }}>
                        <th>ID</th>
                        <th>Pet name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Shelter Name</th>
                        <th>Listing Date</th>
                    </thead>
                    {pets.map((p) => (
                        <tr key={p.adop_id} >
                            <td style={{ textAlign: 'left' }}>{p.adop_id}</td>
                            <td style={{ textAlign: 'left' }}>{p.p_name}</td>
                            <td style={{ textAlign: 'left' }} >{p.p_desc}</td>
                            <td style={{ textAlign: 'left' }}>{p.p_type}</td>
                            <td style={{ textAlign: 'left' }}>{p.s_name}</td>
                            <td style={{ textAlign: 'left' }}>{p.pet_list_date}</td>
                        </tr>
                    ))}
                </table>
            </div >
        )
    }
}
