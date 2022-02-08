import React from "react";
import { Fragment } from "react";
import "./ThingsTable.css";

const ThingsTable = ({ things }) => {
  return (
    <Fragment>
      <div className="table-responsive tbl-reg-cont">
        <table className="pa3 shadow-5 br4">
          <thead>
            <tr className="outline-transparent-l">
              <th>ID</th>
              <th className="al">Shelter Name</th>
              <th className="al">Item Name</th>
              <th className="al">Item Desc</th>
              <th className="al">Email</th>
              <th>Website</th>
              <th>Ph.No.</th>
            </tr>
          </thead>
          <tbody>
            {things.map((thing, i) => {
              return (
                <tr key={things[i].id}>
                  <td className="b-l grow">{things[i].id}</td>
                  <td className="al grow">{things[i].name}</td>
                  <td className="al grow">{things[i].username}</td>
                  <td className="al grow">{things[i].company.catchPhrase}</td>
                  <td className="al grow">{things[i].email}</td>
                  <td>
                    <a
                      href={"http://tiny.cc/9wfnuz"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href="tel: +919623876858">9623876858</a>
                  </td>
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
