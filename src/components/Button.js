import React from "react";

const handelClick = () => {
  console.log("button clicked!")
}

const Button = ({ label, onClick }) => {
  return (
    <div className="div-button">
      <button variant="contained" onClick={handelClick} className="button">
        {label}
      </button>
    </div>
  );
};

export default Button;
