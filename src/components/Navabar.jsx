import React from "react";
import "./styles.css";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";

const Navbar = props => {
  return (
    <header className="nav_bar">
      <nav className="navigation">
        <div className="Navbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="team_name">
          <a href="/">Curiosity</a>
        </div>
        <div className="spacer" />
        <div className="nav_links">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
