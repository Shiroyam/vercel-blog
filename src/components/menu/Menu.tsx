import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTypesSelector } from "./../../hooks/useTypeSelector";
import { MenuActive } from "./MenuActive";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/menu/action";
import "./menu.scss";

export const Menu: React.FC = () => {
  const { flagMenu } = useTypesSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <>
      <div className="menu active-menu">
        <div className="menu__content">
          <div className="menu__headerContainer">
            <div className="menu__header">МЕНЮ</div>
            <MenuIcon
              onClick={() => dispatch(openMenu())}
              className="menu__icon"
            />
          </div>
        </div>
      </div>
      {flagMenu && <MenuActive />}
    </>
  );
};
