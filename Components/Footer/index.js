import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="root d-flex justify-content-between">
        <img className="logo__img" src="/faba-technology-logo.png" alt="logo" />
        <div>
          <div className={styles.footerText}>
            <p>Footer</p>
          </div>
          <p> &#169; Copyright 2020, all rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
