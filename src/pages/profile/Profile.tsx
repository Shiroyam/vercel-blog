import React from "react";
import "./profile.scss";
import { Menu } from "../../components/menu/Menu";
import { PostsProfile } from "../../components/posts/PostsProfile";
import { CommentsAll } from "../../components/comments/CommentsAll";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { togglePosts, toggleComments } from "../../redux/profile/action";

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { toggleFlag } = useTypesSelector((state) => state.profile);
  return (
    <>
      <Menu></Menu>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__headerContainer">
            <div className="profile__header">
              {localStorage.getItem("name")}
            </div>
          </div>
          <div className="profile__toggle">
            <div
              onClick={() => dispatch(togglePosts())}
              className={
                toggleFlag
                  ? "profile__togglePosts open"
                  : "profile__togglePosts"
              }
            >
              Статьи
            </div>
            <div
              onClick={() => dispatch(toggleComments())}
              className={
                !toggleFlag
                  ? "profile__toggleComments open"
                  : "profile__toggleComments"
              }
            >
              Комментарии
            </div>
          </div>
          {toggleFlag ? (
            <>
              <PostsProfile></PostsProfile>
            </>
          ) : (
            <CommentsAll></CommentsAll>
          )}
        </div>
      </div>
    </>
  );
};
