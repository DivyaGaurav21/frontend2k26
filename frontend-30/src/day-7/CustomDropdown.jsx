import React from "react";

const CustomDropdown = ({ options = [], onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  function handleOptionSelect(option) {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="max-w-40">
      <div>
        <button
          className="p-3 border w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "Select an option"}
          <span>{isOpen ? "⬆️" : "⬇️"}</span>
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col">
          {options &&
            options.map((option, index) => (
              <li
                key={index}
                className="p-3 border hover:bg-slate-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
