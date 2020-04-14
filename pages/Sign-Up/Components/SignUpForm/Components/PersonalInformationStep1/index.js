import styles from "../personal-information.module.scss";

const PersonalInformationStep1 = () => {
  return (
    <form className={`w-50 mx-auto pb-4 ${styles.formContent}`}>
      <div className="h5">Personal Infomation</div>
      <p className="my-4">*All fields required unless indicated</p>
      <div>
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
        <div className="form-group w-75">
          <label for="gender">Gender</label>
          <select className={`custom-select ${styles.formInput}`} id="gender">
            <option selected>Select One</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        <div className="form-group ">
          <label for="identified">Identified Ethnicity</label>
          <select
            className={`custom-select ${styles.formInput}`}
            id="identified"
          >
            <option selected>Select All That Apply</option>
          </select>
        </div>
        <div className="form-group">
          <label for="ethncity">Ethncity (Prefer to self-describe)</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="ethncity"
          />
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="city"
          />
        </div>
        <div className="form-group w-75">
          <label for="state">State</label>
          <select className={`custom-select ${styles.formInput}`} id="state">
            <option selected>Select One</option>
          </select>
        </div>
        <div className="form-group w-75">
          <label for="zipcode">Zip Code</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="zipcode"
          />
        </div>
      </div>
    </form>
  );
};
export default PersonalInformationStep1;
