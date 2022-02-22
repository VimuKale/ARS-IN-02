//import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Fragment } from "react";
import "./ThingsTable.css";


const ThingsTable = ({ things, Utype }) => {


  return (
    <Fragment>


      <div className="table-responsive tbl-reg-cont">
        <table className="pa3 shadow-5 br4">
          <thead>
            <tr className="outline-transparent-l">
              <th>ID</th>
              <th className="al">Shelter Name</th>
              <th className="al">Shelter Email</th>
              <th className="al">Item Name</th>
              <th className="al">Item Desc</th>
              <th className="al">Item Qty.</th>
              <th className="al">Item Cost(Approx.)</th>
              <th className="al">Deliver To</th>
              <th className="al">Link To Source</th>
              <th className="al">PhNO:</th>
              <th className="al">Time Frame</th>
              <th className="al">Status</th>
            </tr>
          </thead>
          <tbody>
            {things.map((thing, i) => {
              return (
                <tr key={things[i].i_id}>
                  <td className="b-l grow">{things[i].i_id}</td>
                  <td className="al grow">{things[i].s_name}</td>
                  <td className="al grow">{things[i].s_email}</td>
                  <td className="al grow">{things[i].i_name}</td>
                  <td className="al grow">{things[i].i_desc}</td>
                  <td className="al grow">{things[i].i_qty}</td>
                  <td className="al grow">{things[i].i_cost}</td>
                  <td className="al grow copy" title="Click to Copy" onClick={() => { navigator.clipboard.writeText(things[i].deliver_to); alert(`Text Copied : ${things[i].deliver_to}`); }}>{things[i].deliver_to}</td>
                  <td>
                    <a
                      href={things[i].link_to_source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href={`tel: +91${things[i].s_phno}`}>{things[i].s_phno}</a>
                  </td>
                  <td className="al grow">{things[i].time_frame}</td>
                  <td className="al grow">{things[i].status}</td>

                  {
                    (Utype === "Shelter") ?
                      <td>
                        <div>
                          <button className='tbl-delete-btn' >Delete</button><br />
                          <button className='tbl-update-btn' >Update</button>
                        </div>
                      </td>

                      :
                      (Utype === "Admin") ?
                        <td>
                          <div>
                            <button className='tbl-delete-btn' >Delete</button><br />
                          </div>
                        </td>
                        :
                        <></>

                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ThingsTable;
