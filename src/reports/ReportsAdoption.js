import React, { Component } from 'react'

export default class ReportsAdoption extends Component {
    render() {
        const pets = this.props.pets
        return (
            <div>
                <table>
                    <tr>
                        <th>Pet name</th>
                        <th>Description</th>
                        <th>Type</th>
                    </tr>
                    {pets.map((p) => (
                        <tr key={p.adop_id}>
                            <td>{p.p_name}</td>
                            <td>{p.p_desc}</td>
                            <td>{p.p_type}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
