import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";

import "./main.scss";
export const Main: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="main">
        <div className="main__headerContainer">
          <div className="main__header">Vasya Pupkin</div>
          <div className="main__description">Блог фронтенд-разработчика</div>
        </div>
        <img
          src="http://sun9-85.userapi.com/sun9-32/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1"
          className="main__img"
        />
        <div className="main__textContainer">
          <div className="main__headerText">Обо мне</div>
          <div className="main__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </div>
        </div>
      </div>
    </>
  );
};
