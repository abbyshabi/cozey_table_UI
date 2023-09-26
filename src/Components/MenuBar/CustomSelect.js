import React, { useState, useRef } from "react";

const CustomSelect = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onOptionSelect(option.toLowerCase().replace(' ', '_'));
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={`select-selected ${isOpen ? "select-arrow-active" : ""}`}
        onClick={handleSelectClick}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={option === selectedOption ? "selected" : ""}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
