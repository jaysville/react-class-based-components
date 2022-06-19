import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorities-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">React Meetups</div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  All Meetups
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/new-meetups">
                  New Meetup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/favorites">
                  My Favorites{" "}
                  <span className={classes.badge}>
                    {favoritesCtx.totalFavorites}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default MainNavigation;
