import React, { Component } from 'react'

export default class ReportsThings extends Component {
    render() {
        const things = this.props.things
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Donation Listing Report</h1>
                {/* <h2 style={{ textAlign: "center" }}>Date Wise</h2> */}
                <hr />
                <table >
                    <thead style={{ textAlign: 'left' }}>
                        <th>ID</th>
                        <th>Pet name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Listing Date</th>
                    </thead>
                    <tbody>
                        {things.map((t) => (
                            <tr key={t.i_id} >
                                <td style={{ textAlign: 'left' }}>{t.i_id}</td>
                                <td style={{ textAlign: 'left' }}>{t.i_name}</td>
                                <td style={{ textAlign: 'left' }} >{t.i_desc}</td>
                                <td style={{ textAlign: 'left' }}>{t.i_qty}</td>
                                <td style={{ textAlign: 'left' }}>{t.i_cost}</td>
                                <td style={{ textAlign: 'left' }}>{t.date}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div >
        )
    }
}
