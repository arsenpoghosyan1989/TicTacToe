import React from "react";

const Li = ({ id, xo, clickHandler }) => {
  function checkStatus() {
    return clickHandler(id);
  }
  let crossOrZero = "";
  let style = xo === "x" ? { color: "green" } : { color: "red" };
  return (
    <li onClick={checkStatus} className="text-center">
      {<div style={style}>{xo}</div>}
    </li>
  );
};
export default Li;
