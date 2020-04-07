import styles from "./navbar.module.scss";

const Navbar = () => {
  const listLink = [
    "Our Publications",
    "Traning",
    "About Us",
    " Contact Us",
    "Request Account",
  ];
  const renderNavbar = () => {
    return listLink.map((link, index) => {
      return (
        <li className="nav-item mx-3" key={index}>
          <a className="nav-link" href="#">
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
        <ul className=" navbar-nav">
          {renderNavbar()}
          <li className={`nav-item ${styles.line}`}>
            <a className="nav-link" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
