import React from "react";
import "./sideDrawer.css";

function SideDrawer(props) {
  let drawerClasses = "side_drawer";
  if (props.show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <div>
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">login</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideDrawer;
