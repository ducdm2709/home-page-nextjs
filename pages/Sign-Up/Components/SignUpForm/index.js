import { Fragment, useState } from "react";

import styles from "./sign-up.module.scss";
import StepBar from "./Components/StepBar";
import PersonalInformationStep1 from "./Components/PersonalInformationStep1";
import PersonalInformationStep2 from "./Components/PersonalInformationStep2";
import ProgramProviderInformation from "./Components/ProgramProviderInformation";

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    setStep(step - 1);
  };
  const nextButton = () => {
    return (
      <button
        className={`btn ${styles.btn__next} ${styles.btnForm} `}
        onClick={handleNextStep}
      >
        Next
        <span className="pl-2">
          <i class="fa fa-chevron-right"></i>
        </span>
      </button>
    );
  };
  const backButton = () => {
    return (
      <button
        className={`btn ${styles.btn__back} ${styles.btnForm} mr-3`}
        onClick={handleBackStep}
      >
        <span className="pr-2">
          <i class="fa fa-chevron-left"></i>
        </span>
        Back
      </button>
    );
  };

  const renderBody = () => {
    switch (step) {
      case 1:
        return (
          <Fragment>
            <div className={`rounded-lg ${styles.signUpForm}`}>
              <StepBar step={step} />
              <PersonalInformationStep1 />
            </div>
            <div className={`text-right my-3 ${styles.formBottom}`}>
              {nextButton()}
            </div>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <div className={`rounded-lg ${styles.signUpForm}`}>
              <StepBar step={step} />
              <PersonalInformationStep2 />
            </div>
            <div className={`text-right my-3 ${styles.formBottom}`}>
              {backButton()}
              {nextButton()}
            </div>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <div className={`rounded-lg ${styles.signUpForm}`}>
              <StepBar step={step} />
              <ProgramProviderInformation />
            </div>
            <div className={`text-right my-3 ${styles.formBottom}`}>
              {backButton()}
              <button className={`btn ${styles.btnSubmit}`}>
                Request Account
              </button>
            </div>
          </Fragment>
        );
      default:
        break;
    }
  };

  return <div className={`w-50 mx-auto ${styles.form}`}>{renderBody()}</div>;
};
export default SignUpForm;
