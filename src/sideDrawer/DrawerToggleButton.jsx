import React from "react";
import "./DrawerToggleButton.css";
import { removePropertiesDeep } from "@babel/types";

const DrawerToggleButton = props => (
  <button className="toggle_button" onClick={props.click}>
    <div className="toggle_button_line" />
    <div className="toggle_button_line" />
    <div className="toggle_button_line" />
  </button>
);

export default DrawerToggleButton;
