import React from "react";

const Info = ({ company, title, dates }) => {
  return (
    <div className="info">
      <div className="profession">
        <h3 style={{ fontWeight: "400", letterSpacing: "0.1em" }}>{title}</h3>
      </div>
      <div className="name-duration">
        <h4 className="name">{company}</h4>
        <div className="duration">
          <p style={{ letterSpacing: "0.1em" }}>{dates}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
