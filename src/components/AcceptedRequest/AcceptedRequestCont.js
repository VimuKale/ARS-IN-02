import React, { useEffect, useState } from 'react'
import Scroll from '../Scroll/Scroll'
import SearchBarRR from './SearchBarAR/SearchBarAR'
import ViewRescueRequest from './ViewAcceptedRequest'

function AcceptedRequestCont() {

    let data = JSON.parse(window.localStorage.getItem('data'));

    const [rrs, setRRS] = useState([]);
    const [rrssearchfield, setrrssearchfield] = useState('');

    useEffect(() => {

        fetch('http://localhost:3002/acceptedrequests', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                s_id: data.s_id,
            })
        })
            .then(response => response.json())
            .then(rrs => { setRRS(rrs) });


    }
        , [])


    const filteredRRS = rrs.filter(rr => {
        return rr.ra_loc.toLowerCase().includes(rrssearchfield.toLowerCase());
    })


    return (
        <>
            <SearchBarRR setrrssearchfield={setrrssearchfield} />
            <Scroll>
                <ViewRescueRequest rrs={filteredRRS} />
            </Scroll>
        </>
    )
}

export default AcceptedRequestCont;