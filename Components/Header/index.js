import styles from "./header.module.scss";
import Navbar from "./Components/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="d-flex">
        <img src="/faba-technology-logo.png" className="logo__img mr-2" />
        <h4 className={styles.title}>Care Transition Intervention</h4>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
