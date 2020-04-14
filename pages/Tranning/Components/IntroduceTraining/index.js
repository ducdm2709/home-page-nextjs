import styles from "./introduce-training.module.scss";
import { Fragment } from "react";
import TitlePage from "../../../../Components/TitlePage";

const IntroduceTraining = () => {
  return (
    <Fragment>
      <TitlePage title="Tranning" />
      <div className="row">
        <div className="col-md-3">
          <div className={styles.introduceTitle}>
            Introduce Training
            <span className={`ml-4 ${styles.introduceContent}`}>
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
export default IntroduceTraining;
