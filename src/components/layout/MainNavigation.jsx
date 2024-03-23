import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavitation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>

      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetups</Link>
        </li>
        <li>
          <Link to="/favorite">Favorites</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavitation;
