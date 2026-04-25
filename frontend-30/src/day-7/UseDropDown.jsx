import React from "react";
import CustomDropdown from "./CustomDropdown";

const UseDropDown = () => {
    const selectHandler = (option) => {
        console.log("Selected option:", option);
    }
  return (
    <div>
      <CustomDropdown
        options={["React", "JavaScript", "HTML", "CSS"]}
        onSelect={selectHandler}
      />
    </div>
  );
};

export default UseDropDown;
