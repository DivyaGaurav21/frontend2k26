import React from "react";
import "./day11.css"

const Input = ({
  fieldName,
  type="text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  className,
  ref,
  style = "default",
  rest,
}) => {
  let classes;
  if (style === "small") {
    classes = "small";
  } else if (style === "medium") {
    classes = "medium";
  } else {
    classes = "default";
  }
  return (
    <div className="input-container">
      {fieldName && <span className="fieldName">{fieldName}</span>}
      <input
        value={value}
        type={type}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className} ${classes}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
