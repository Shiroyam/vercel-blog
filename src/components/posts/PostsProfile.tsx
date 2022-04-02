import React from "react";
import "./posts.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { getPosts } from "../../redux/posts/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../redux/editing/action";

export const PostsProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useTypesSelector((state) => state.posts);
  const { text } = useTypesSelector((state) => state.search);
  const postItems: any[] = posts.items;

  React.useEffect(() => {
    dispatch(getPosts(text, 1));
  }, [text]);

  return (
    <>
      {(postItems ?? [])
        .filter((post) => post.user._id === localStorage.getItem("id"))
        .map((post) => (
          <div key={post._id} className="posts">
            <div className="posts__textContainer">
              <div className="posts__header">{post.title}</div>
              <div className="posts__text">{post.description}</div>
              <div className="posts__dateContainer">
                <div className="posts__date">{post.createdAt}</div>
                <div className="posts__iconContainer">
                  <div className="posts__number">{post.views}</div>
                  <VisibilityIcon className="posts__icon" />
                </div>
              </div>
              <div className="editing">
                <Link
                  className="editing__btnEditing"
                  to={`/editingPage/${post._id}`}
                >
                  Изменить
                </Link>
                <button
                  onClick={() => dispatch(deletePost(post._id))}
                  className="editing__btnDeleted"
                >
                  Удалить
                </button>
              </div>
            </div>
            <img className="posts__img" src={post.photoUrl}></img>
          </div>
        ))}
    </>
  );
};
