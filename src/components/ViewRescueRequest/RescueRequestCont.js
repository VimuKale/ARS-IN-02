import React, { useEffect, useState } from 'react'
import Scroll from '../Scroll/Scroll'
import SearchBarRR from './SearchBarRR/SearchBarRR'
import ViewRescueRequest from './ViewRescueRequest'

function RescueRequestCont() {


    const [rrs, setRRS] = useState([]);
    const [rrssearchfield, setrrssearchfield] = useState('');

    const [rescuestartdate, setrescuestartdate] = useState('');
    const [rescueenddate, setrescueenddate] = useState('');

    useEffect(() => {

        fetch('http://localhost:3002/requests', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then(response => response.json())
            .then(rrs => { setRRS(rrs) });


    }
        , [])


    const filteredRRS = rrs.filter(rr => {
        return (
            rr.ra_loc.toLowerCase().includes(rrssearchfield.toLowerCase())
            // rr.date.toLowerCase().includes(rescuestartdate.toLowerCase())
        );
    })


    return (
        <>
            <SearchBarRR setrrssearchfield={setrrssearchfield} rrs={filteredRRS} rescueenddate={rescueenddate} rescuestartdate={rescuestartdate} setrescueenddate={setrescueenddate} setrescuestartdate={setrescuestartdate} />
            <Scroll>
                <ViewRescueRequest rrs={filteredRRS} />
            </Scroll>
        </>
    )
}

export default RescueRequestCont;