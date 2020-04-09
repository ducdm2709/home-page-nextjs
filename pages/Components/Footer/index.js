import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={` ${styles.footer}`}>
      <div className="container p-0 d-flex justify-content-between">
        <img
          className={`logo__img mt-3 ${styles.logoFooter}`}
          src="/assets/logo-white.png"
          alt="logo"
        />
        <div className={`w-100 text-right pt-5 ${styles.footerText}`}>
          <p> &#169; Copyright 2020, all rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
