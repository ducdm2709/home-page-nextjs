import styles from "../personal-information.module.scss";

const ProgramProviderInformation = () => {
  return (
    <form className={`w-50 mx-auto pb-4 ${styles.formContent}`}>
      <div className="h5">Program Provider Information</div>
      <p className="my-4">*All fields required unless indicated</p>
      <div>
        <div className="form-group">
          <label for="nameOfOrganization">
            Name of Organization You Provide CTI Under
          </label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="nameOfOrganization"
          />
        </div>

        <div className="form-group">
          <label for="typeOfOrganization">Type Of Organization</label>
          <select
            className={`custom-select ${styles.formInput}`}
            id="typeOfOrganization"
          >
            <option selected>Select One</option>
          </select>
        </div>

        <div className="form-group">
          <label for="typeOfOrganizationOther">
            Type Of Organization Other
          </label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="typeOfOrganizationOther"
          />
        </div>

        <div className="form-group">
          <label for="address1">Address 1</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="address1"
          />
        </div>

        <div className="form-group">
          <label for="address2">Address 2</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="address2"
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

        <div className="form-group">
          <label for="state">State</label>
          <select className={`custom-select ${styles.formInput}`} id="state">
            <option selected>Select One</option>
          </select>
        </div>

        <div className="form-group">
          <label for="zipcode">Zip code</label>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            id="zipcode"
          />
        </div>

        <div className="form-group">
          <label for="comment">Comment</label>
          <textarea
            rows="7"
            type="text"
            className={`form-control ${styles.formInput}`}
            id="comment"
          />
        </div>
      </div>
    </form>
  );
};
export default ProgramProviderInformation;
