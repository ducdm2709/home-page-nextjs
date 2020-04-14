import styles from "./../../../pages/sign-up/Components/SignUpForm/Components/personal-information.module.scss";

const FormGetInfomation = () => {
  return (
    <form className={`w-50 mt-4 mx-auto pb-4 ${styles.formContent}`}>
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
        <label for="firstName">First Name</label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="firstName"
        />
      </div>
      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="lastName"
        />
      </div>
      <div className="form-group">
        <label for="preferredEmailAddress">Preferred Email Address</label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="preferredEmailAddress"
        />
      </div>
      <div className="form-group">
        <label for="firstName">Primary Phone Number</label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="firstName"
        />
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="work"
              name="numberPhone"
            />
            <label
              className={`custom-control-label ${styles.radioInput}`}
              for="work"
            >
              Work
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="cellPhone"
              name="numberPhone"
            />

            <label
              className={`custom-control-label ${styles.radioInput}`}
              for="cellPhone"
            >
              Cell Phone
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="home"
              name="numberPhone"
            />

            <label
              className={`custom-control-label ${styles.radioInput}`}
              for="home"
            >
              Home
            </label>
          </div>
        </form>
      </div>

      <div className="form-group">
        <label for="organization">Organization</label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="organization"
        />
      </div>

      <div className="form-group">
        <label for="numberOfpeople">
          Number of people interested in trainning?
        </label>
        <input
          type="text"
          className={`form-control ${styles.formInput}`}
          id="numberOfpeople"
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
    </form>
  );
};
export default FormGetInfomation;
