import React from "react";
import "./Scroll.css";
//props,states,childerens

const Scroll = (props) => {
  return <div className="scrollbar">{props.children}</div>;
};

export default Scroll;
