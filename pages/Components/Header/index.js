import styles from "./header.module.scss";
import Navbar from "./Components/Navbar";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <a href="#" className={`d-flex ${styles.link}`}>
        <img src="/assets/logo.png" className="logo__img mr-2 mt-4" />
        <h5 className={`mt-3 ${styles.title}`}>
          Care Transition Intervention
          <span className="align-text-top h6 h-25">&reg;</span>
        </h5>
      </a>
      <Navbar />
    </header>
  );
};
export default Header;
