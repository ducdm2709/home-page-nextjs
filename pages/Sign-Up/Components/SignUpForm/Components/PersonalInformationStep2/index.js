import styles from "../personal-information.module.scss";
const PersonalInformationStep2 = () => {
  return (
    <form className={`w-50 mx-auto pb-4 ${styles.formContent}`}>
      <div className="h5">Personal Infomation</div>
      <p className="my-4">*All fields required unless indicated</p>
      <div>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="title"
          />
        </div>
        <div className="form-group">
          <label for="credentials">Professional Credentials</label>
          <select
            className={`custom-select ${styles.formInput}`}
            id="credentials"
          >
            <option selected>Select One</option>
          </select>
        </div>
        <div className="form-group">
          <label for="yearOrBeganCTI">
            Year CTI Trained or Began Offering CTI
          </label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="yearOrBeganCTI"
          />
        </div>
        <div className="form-group">
          <label>
            If a Transitions Coach - are you currently providing the 30-day
            intervention?
          </label>
          <form>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="yesIntervention"
                name="chooseAnswerIntervention"
              />
              <label
                className={`custom-control-label ${styles.radioInput}`}
                for="yesIntervention"
              >
                Yes
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="noIntervention"
                name="chooseAnswerIntervention"
              />
              <label
                className={`custom-control-label ${styles.radioInput}`}
                for="noIntervention"
              >
                No
              </label>
            </div>
          </form>
        </div>
        <div className="form-group">
          <label for="primaryRole">CTI Primary Role</label>
          <select
            className={`custom-select ${styles.formInput}`}
            id="primaryRole"
          >
            <option selected>Select All The Aplly</option>
          </select>
        </div>

        <div className="form-group">
          <label for="primaryRoleOther">CTI Primary Role (Other)</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="primaryRoleOther"
          />
        </div>
        <div className="form-group">
          <label>Are You Registered CTI Coach?</label>
          <form>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="yesCoach"
                name="chooseCoach"
              />
              <label
                className={`custom-control-label ${styles.radioInput}`}
                for="yesCoach"
              >
                Yes
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="noCoach"
                name="chooseCoach"
              />
              <label
                className={`custom-control-label ${styles.radioInput}`}
                for="noCoach"
              >
                No
              </label>
            </div>
          </form>
        </div>
        <div className="form-group">
          <label for="lastTimeIntervention">
            If a Transitions Coach - When was the last time you completed a
            30-day intervention?
          </label>
          <input
            type="date"
            className={`form-control ${styles.formInput}`}
            id="lastTimeIntervention"
          />
        </div>
        <div className="form-group">
          <label for="comment">Comment</label>
          <textarea
            rows="5"
            type="text"
            className={`form-control ${styles.formInput}`}
            id="comment"
          />
        </div>
        <div className="form-group">
          <label for="caseload">
            If a Transitions Coach - What is your monthly CTI caseload?
          </label>
          <select className={`custom-select ${styles.formInput}`} id="caseload">
            <option selected>Select One</option>
          </select>
        </div>
      </div>
    </form>
  );
};
export default PersonalInformationStep2;
