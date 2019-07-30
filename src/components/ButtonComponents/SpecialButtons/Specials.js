import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
//Import your array data to from the provided data file
import { specials } from "../../../data";
const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);
  return (
    <div class="specialsDiv">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsState.map((item, index)=> {
         return SpecialButton(item, index);
       })}
    </div>
  );
};
export default Specials;