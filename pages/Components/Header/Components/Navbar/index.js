import styles from "./navbar.module.scss";

const Navbar = () => {
  const listLink = [
    "Our Publications",
    "Traning",
    "About Us",
    " Contact Us",
    "Request Account",
    "Sign In",
  ];
  const renderNavbar = () => {
    return listLink.map((link, index) => {
      if (link === "Sign In") {
        return (
          <li className={`nav-item  ${styles.line} ${styles.navItem}`}>
            <a className={`nav-link ${styles.navLink}`} href="#">
              Sign In
            </a>
          </li>
        );
      }
      return (
        <li className={`nav-item mx-3 ${styles.navItem}`} key={index}>
          <a className={`nav-link ${styles.navLink}`} href="#">
            {link}
          </a>
        </li>
      );
    });
  };
  return (
    <nav className="navbar navbar-expand-md ">
      <button
        className="navbar-toggler pull-right"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        &#9776;
      </button>
      <div
        className={`collapse navbar-collapse ${styles.navbarCollapse}`}
        id="collapsibleNavbar"
      >
        <ul className=" navbar-nav">{renderNavbar()}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
