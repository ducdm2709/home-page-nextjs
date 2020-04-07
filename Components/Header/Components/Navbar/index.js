import styles from "./navbar.module.scss";

const Navbar = () => {
  const listLink = [
    "Our Publications",
    "Traning",
    "About us",
    " Contact us",
    "Request Account",
  ];
  const renderNavbar = () => {
    return listLink.map((link, index) => {
      return (
        <li className="nav-item" key={index}>
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
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        &#9776;
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
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
