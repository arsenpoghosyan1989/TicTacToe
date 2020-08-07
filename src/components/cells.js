import React from "react";
import Li from "./li";

const Cells = ({ cells, clickHandler }) => {
  return (
    <ul className="nobull">
      {cells.map(({ val, id }) => {
        return (
          <Li
            key={id}
            id={id}
            xo={val}
            clickHandler={clickHandler}
            className="text-center"
          />
        );
      })}
    </ul>
  );
};
export default Cells;
