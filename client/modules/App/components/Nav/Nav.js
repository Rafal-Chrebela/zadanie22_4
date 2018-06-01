import React, { PropTypes } from "react";
import { Link } from "react-router";

// Import Style
import styles from "./Nav.css";

const Nav = (props, context) => {
  return (
    <div className={styles["nav"]}>
      <ul>
        <li>
          <Link to="/home" activeClassName={styles["active"]}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" activeClassName={styles["active"]}>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={styles["active"]}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
