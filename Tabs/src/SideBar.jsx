import React from "react";

const SideBar = ({ company, index, setvalue, value, hello }) => {
  console.log(hello);
  return (
    <>
      <button
        onClick={() => {
          setvalue(index);
        }}
        className={` ${index === value && "active-btn"} job-btn`}
      >
        {company}
      </button>
    </>
  );
};

export default SideBar;
