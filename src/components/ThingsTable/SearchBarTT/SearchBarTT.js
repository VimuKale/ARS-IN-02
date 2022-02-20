import React from "react";
import "./SearchBarTT.css";

const SearchBarTT = ({ setthingssearchfield }) => {
  return (
    <div className="outerdiv1">
      <h1 className="f1">Things We Need</h1>
      <input
        className="adosar1"
        type="search"
        placeholder="Search Thing  To Donate With Shelter Name"
        onChange={event => (setthingssearchfield(event.target.value))}
      />
    </div>
  );
};

export default SearchBarTT;
