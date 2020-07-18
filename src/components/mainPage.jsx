import React, { Component } from "react";
import Navbar from "./Navabar";
import SideDrawer from "../sideDrawer/sideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import Main from "./login/mainlogin";
import Slider from "./carousel/carousel";
import About from "./aboutUs/aboutUs";
import Contact from "./contactus/contactUs";

class Page extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <div>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
