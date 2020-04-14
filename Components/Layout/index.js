import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Meta from "../Meta";
import styles from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Meta />
      <div className="container-fluid p-0">
        <div className={`container p-0 ${styles.main}`}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Layout;
