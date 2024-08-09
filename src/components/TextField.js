import React from "react";
import { TextField } from "@mui/material";


const Textfield = (props) =>{
  //const classes = useStyles();
  console.log(props.text);
  return (
    <div className="div-field-text">
      <TextField
        disabled
        id="filled-disabled"
        label="Disabled"
        variant="filled"
        className="field-text"
        value={props.text}
      />
    </div>
  );
};
export default Textfield;
