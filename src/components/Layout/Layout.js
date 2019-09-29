import React from "react";
import Auxiliar from "../../hof/Auxiliar";
import styles from "./Layout.module.css";

const Layout = props => {
  return (
    <Auxiliar>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Auxiliar>
  );
};

export default Layout;
