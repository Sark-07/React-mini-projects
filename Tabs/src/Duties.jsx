import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Duties = ({ duties }) => {
  return (
    <div className="duties">
      <ul>
        <li>
          <FaAngleDoubleRight className="icon" />
          <p className="duty">{duties}</p>
        </li>
      </ul>
    </div>
  );
};

export default Duties;
