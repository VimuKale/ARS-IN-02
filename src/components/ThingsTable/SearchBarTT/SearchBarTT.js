import React, { useRef } from "react";
import "./SearchBarTT.css";
import { useReactToPrint } from 'react-to-print';
import ReportsThings from "../../../reports/ReportsThings";

const SearchBarTT = ({ setthingssearchfield, things, thingsstartdate, thingsenddate, setthingsenddate, setthingsstartdate }) => {




  let data = JSON.parse(window.localStorage.getItem('data'));

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const ReportButtons = () => {
    return (
      <>

        <div>
          <input
            type={'date'}
            value={thingsstartdate}
            onChange={e => (setthingsstartdate(e.target.value))}
          />

          {/* <input
            type={'date'}
            value={thingsenddate}
            onChange={e => (setthingsenddate(e.target.value))}
          />

          <button
          // onClick={() => {
          // 	console.log(startdate, enddate);
          // 	setpetstartdate(startdate);
          // 	setpetenddate(enddate);
          // }}
          >search date wise</button> */}
        </div>

        <div>
          <div style={{ display: "none" }}>
            <ReportsThings ref={componentRef} things={things} />
          </div>
          <button onClick={handlePrint}>Print this out! </button>
        </div>

      </>

    );
  }



  const Userdecide = () => {
    switch (data.type) {
      case 'Shelter': return (
        <>
          <ReportButtons />
        </>
      );
      case 'Admin': return (
        <>
          <ReportButtons />
        </>
      );
      case 'User': return (
        <>
        </>
      );

      default: return (<>ERROR</>);
    }
  }










  return (
    <div className="outerdiv1">
      <h1 className="f1">Things We Need</h1>
      <input
        className="adosar1"
        type="search"
        placeholder="Search Thing  To Donate With Shelter Name"
        onChange={event => (setthingssearchfield(event.target.value))}
      />
      <Userdecide />
    </div>
  );
};

export default SearchBarTT;
