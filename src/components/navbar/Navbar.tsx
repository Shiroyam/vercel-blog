import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import { Posts } from "../posts/Posts";
import { useDispatch } from "react-redux";
import { openAuthorization } from "../../redux/authorization/action";
import { Link } from "react-router-dom";
import { Pogination } from "../pogination/Pogination";
import { Search } from "../search/Search";
import { openSearch } from "../../redux/search/action";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="nav">
        <Search></Search>
        <div className="nav__content">
          <div className="nav__header">VASYA BLOG</div>
          <div className="nav__icon">
            <SearchIcon
              onClick={() => dispatch(openSearch())}
              className="nav__iconSearch"
            />
            {localStorage.getItem("token") ? (
              <Link to="/profile">
                <PersonIcon className="nav__iconPerson" />
              </Link>
            ) : (
              <PersonIcon
                onClick={() => dispatch(openAuthorization())}
                className="nav__iconPerson"
              />
            )}

            <Link to="/create">
              <CreateIcon className="nav__iconCreate" />
            </Link>
          </div>
        </div>
        <div>
          <Posts></Posts>
          <Pogination></Pogination>
        </div>
      </nav>
    </>
  );
};
