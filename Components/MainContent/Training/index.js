import styles from "./training.module.scss";
import { Fragment } from "react";

const Training = () => {
  return (
    <Fragment>
      <h2 className="title">Training</h2>
      <div className="row">
        <div className="col-md-3">
          <div className={styles.introduceTitle}>
            Introduce Training
            <span className={styles.introduceContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Training;
