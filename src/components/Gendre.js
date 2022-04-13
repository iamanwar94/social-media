import React, { useState } from "react";

const Gendre = ({ name }) => {
  const [height, setHeight] = useState();
  const heightChangeHandler = (e) => {
    setHeight(e.target.value);
    console.log(height)
  };
  return (
    <div className="gendre">
      <h4 style={{ marginLeft: "5px" }}>
        Hello {name}, Please fill the required fields to meet your soulmate.
      </h4>
        <input
          type="text"
          placeholder="Height in Feets"
          value={height}
          onChange={heightChangeHandler}
        />
    </div>
  );
};
export default Gendre;
