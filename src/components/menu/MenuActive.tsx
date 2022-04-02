import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuActive.scss";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/menu/action";
import { NavLink } from "react-router-dom";
import { openAuthorization } from "../../redux/authorization/action";
import { openReg } from "../../redux/registration/action";

export const MenuActive: React.FC = () => {
  const dispatch = useDispatch();

  const exit = () => {
    localStorage.clear();
    window.location.reload();
  };

  const clickReg = () => {
    dispatch(openReg());
    dispatch(closeMenu());
  };

  const clickAuth = () => {
    dispatch(openAuthorization());
    dispatch(closeMenu());
  };

  return (
    <>
      <div className="menuActive">
        <div className="menuActive__content">
          <div className="menuActive__routes">
            {localStorage.getItem("token") ? (
              <>
                <div className="menuActive__headerName">
                  {localStorage.getItem("name")}
                </div>
                <NavLink to="/" className="menuActive__route">
                  Главная
                </NavLink>
                <NavLink to="/profile" className="menuActive__route">
                  Мой профиль
                </NavLink>
                <NavLink to="/create" className="menuActive__route">
                  Создать запись
                </NavLink>
                <div onClick={exit} className="menuActive__route">
                  Выйти
                </div>
              </>
            ) : (
              <>
                <NavLink to="/" className="menuActive__route">
                  Главная
                </NavLink>
                <div onClick={clickReg} className="menuActive__route">
                  Зарегистрироваться
                </div>
                <div onClick={clickAuth} className="menuActive__route">
                  Войти
                </div>
              </>
            )}
          </div>
          <div className="menuActive__closeContainer">
            <CloseIcon
              onClick={() => dispatch(closeMenu())}
              className="menuActive__icon"
            />
            <div className="menuActive__header">МЕНЮ</div>
          </div>
        </div>
      </div>
    </>
  );
};
