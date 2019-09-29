import React from "react";
import Auxiliar from "../../hof/Auxiliar";

const Layout = props => {
  return (
    <Auxiliar>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Auxiliar>
  );
};

export default Layout;
