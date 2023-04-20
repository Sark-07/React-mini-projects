import React from "react";

const Error = ({ error, errCode }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Error: <span style={{ color: "crimson", margin: "auto" }}>{error}</span>
        <p style={{ textAlign: "center" }}>{errCode}</p>
      </h2>
    </div>
  );
};

export default Error;
