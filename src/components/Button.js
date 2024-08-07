import React from "react";



const Button = ({ label, onClick }) => {
  return (
    <div className="div-button">
      <button variant="contained" onClick={onClick} className="button">
        {label}
      </button>
    </div>
  );
};

export default Button;
