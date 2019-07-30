import React from "react";

const OperatorButton = (item, index) => {
  console.log(item);
  return (
    <button key={item.value}>{item.char}</button>
     // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};
export default OperatorButton;
