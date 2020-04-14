import styles from "./navbar.module.scss";
import Link from "next/link";

const pages = [
  {
    title: "Our Publications",
    href: "/our-publications",
  },
  {
    title: "Traning",
    href: "/tranning",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Request an Account",
    href: "/sign-up",
  },
  {
    title: "Sign In",
    href: "/sign-in",
  },
];
const renderNavbar = () => {
  return pages.map((page, index) => {
    if (page.title === "Sign In") {
      return (
        <li
          className={`nav-item  ${styles.line} ${styles.navItem}`}
          key={index}
        >
          <Link href={page.href}>
            <a className={`nav-link ${styles.navLink}`} href="#">
              {page.title}
            </a>
          </Link>
        </li>
      );
    }
    return (
      <li className={`nav-item mx-3 ${styles.navItem}`} key={index}>
        <Link href={page.href}>
          <a className={`nav-link ${styles.navLink}`} href="#">
            {page.title}
          </a>
        </Link>
      </li>
    );
  });
};
const Navbar = () => {
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
