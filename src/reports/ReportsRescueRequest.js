import React, { Component } from 'react'

export default class ReportsRescueRequest extends Component {
    render() {
        const rrs = this.props.rrs
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Rescue Requests Report</h1>
                <hr />
                <table >
                    <thead style={{ textAlign: 'left' }}>
                        <th>Req. ID</th>
                        <th>Anmial Type</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Landmark</th>
                        <th>Date</th>
                    </thead>
                    {rrs.map((r) => (
                        <tr key={r.r_id} >
                            <td style={{ textAlign: 'left' }}>{r.r_id}</td>
                            <td style={{ textAlign: 'left' }}>{r.ra_type}</td>
                            <td style={{ textAlign: 'left' }} >{r.ra_desc}</td>
                            <td style={{ textAlign: 'left' }}>{r.ra_loc}</td>
                            <td style={{ textAlign: 'left' }}>{r.ra_lm}</td>
                            <td style={{ textAlign: 'left' }}>{r.date}</td>
                        </tr>
                    ))}
                </table>
            </div >
        )
    }
}
