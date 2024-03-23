import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

function MainNavitation(props) {
  const favoritesCtx = useContext(FavoritesContext);
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
          <Link to="/favorite">
            Favorites{" "}
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavitation;
