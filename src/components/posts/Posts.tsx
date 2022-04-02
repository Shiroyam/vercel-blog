import React from "react";
import "./posts.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { getPosts } from "../../redux/posts/action";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useTypesSelector((state) => state.posts);
  const { text } = useTypesSelector((state) => state.search);
  const postItems: any[] = posts.items;

  React.useEffect(() => {
    dispatch(getPosts(text, 1));
  }, [text]);

  return (
    <>
      {(postItems ?? []).map((post) => (
        <NavLink
          key={post._id}
          to={`/post/${post._id}`}
          style={{ textDecoration: "none" }}
          className="posts"
        >
          <div className="posts__textContainer">
            <div className="posts__header">{post.title}</div>
            <div className="posts__text">{post.description}</div>
            <div className="posts__dateContainer">
              <div className="posts__date">
                {post.createdAt.slice(0, 10)} в {post.createdAt.slice(11, 19)}
              </div>
              <div className="posts__iconContainer">
                <div className="posts__number">{post.views}</div>
                <VisibilityIcon className="posts__icon" />
              </div>
            </div>
          </div>
          <img className="posts__img" src={post.photoUrl}></img>
        </NavLink>
      ))}
    </>
  );
};
