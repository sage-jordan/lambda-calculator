import React from "react";

const SpecialButton = (item, index) => {
  return (
    <button key={index}>{item}</button>
      //{/* Display a button element rendering the data being passed down from the parent container on props */}
  
  );
};
export default SpecialButton;