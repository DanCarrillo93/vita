import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ to, exact = false, children, className }) {
  return (
    <li className="flex flex-col justify-center content-center">
      <NavLink exact={exact} className={className} to={to} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
}
export default Nav;
