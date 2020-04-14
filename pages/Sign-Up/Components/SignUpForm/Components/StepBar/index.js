import styles from "./stepbar.module.scss";

const numberStep = [
  {
    circle: styles.circle,
    line: styles.line,
    active: styles.active,
  },
  {
    circle: styles.circle,
    line: styles.line,
    active: styles.active,
  },
  {
    circle: styles.circle,
    active: styles.active,
  },
];
const StepBar = (props) => {
  const renderStep = () => {
    return numberStep.map((stepItem, index) => {
      if (index < props.step) {
        return (
          <li className="d-flex pr-5 sticky-top">
            <span
              className={`${stepItem.circle} ${stepItem.line} ${stepItem.active}`}
            ></span>
          </li>
        );
      }

      if (index >= props.step) {
        return (
          <li className="d-flex pr-5 sticky-top">
            <span className={`${stepItem.circle} ${stepItem.line} `}></span>
          </li>
        );
      }
    });
  };

  return (
    <div className="p-4 d-flex">
      <div className="h5 d-inline-block">Step {props.step} of 3</div>
      <ul className="d-flex w-50 list-unstyled ml-2 pt-2">{renderStep()}</ul>
    </div>
  );
};
export default StepBar;
