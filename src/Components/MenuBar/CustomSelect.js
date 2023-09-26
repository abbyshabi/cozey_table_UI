import React, { useState, useRef, useEffect } from "react";

const CustomSelect = ({ options, selectedOption, onOptionSelect, scrollToSelector }) => {
   console.log(selectedOption, 'custom', scrollToSelector)
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);

    onOptionSelect(option);
    
    const section = document.querySelector(`#${scrollToSelector}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="custom-select" style={{ width: "100%" }} ref={selectRef}>
      <div
        className={`select-selected ${isOpen ? "select-arrow-active" : ""}`}
        onClick={handleSelectClick}
      >
        {selectedOption}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={option === selectedOption ? "same-as-selected" : ""}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
