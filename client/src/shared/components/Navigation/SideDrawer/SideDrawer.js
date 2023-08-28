import React from "react";

import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";

const SideDrawer = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex flex-1 flex-col bg-blue-600">
        <Logo />
        <NavLinks />
        <Profile />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;