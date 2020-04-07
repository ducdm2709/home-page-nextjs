import styles from "./training.module.scss";
import { Fragment } from "react";

const Training = () => {
  return (
    <Fragment>
      <h2 className="title">Training</h2>
      <div className="row">
        <div className="col-md-3">
          <p className={styles.introduceTitle}>
            Introduce Training --{" "}
            <span className={styles.introduceContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
        </div>
        <div className="col-md-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Training;
