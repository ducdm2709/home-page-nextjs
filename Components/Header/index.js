import styles from "./header.module.scss";
import Navbar from "./Components/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={`d-flex ${styles.link}`}>
        <img src="/logo.png" className="logo__img mr-2 mt-4" />
        <h5 className={styles.title}>Care Transition Intervention&reg;</h5>
      </a>
      <Navbar />
    </header>
  );
};
export default Header;
