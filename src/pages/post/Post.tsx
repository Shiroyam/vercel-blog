import React from "react";
import "./post.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";
import { Comments } from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/post/action";
import { getCommentsPost } from "../../redux/comments/action";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { postComments } from "../../redux/comments/action";
import { useForm } from "react-hook-form";

export const Post: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post } = useTypesSelector((state) => state.post);
  const { comment } = useTypesSelector((state) => state.comments);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onClickSubmit = (data: any) => {
    dispatch(postComments(data, id));
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(getPost(id));
    dispatch(getCommentsPost(id));
  }, [id]);

  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="post">
        <div
          style={{ backgroundImage: `url(${post.photoUrl})` }}
          className="post__headerContainer"
        >
          <div className="post__dateContainer">
            <div className="post__date">
              {post.createdAt && post.createdAt.slice(0, 9)} в{" "}
              {post.createdAt && post.createdAt.slice(11, 16)}
            </div>
            <div className="post__iconContainer">
              <VisibilityIcon className="post__icon" />
              <div className="post__number">{post.views}</div>
            </div>
          </div>
          <div className="post__headerText">
            <div className="post__header">{post.title}</div>
            <div className="post__description">{post.description}</div>
          </div>
        </div>
        <div className="post__textContainer">
          <div className="post__text">{post.text}</div>
        </div>
        <div className="post__commentsContainer">
          <div className="post__commentsHeader">
            Комментарии ({comment.length})
          </div>
          <Comments></Comments>
          <div className="post__commentsInputContainer">
            <div className="post__commentsInputHeader">
              Добавить комментарий
            </div>
            <form onSubmit={handleSubmit(onClickSubmit)}>
              <textarea
                {...register("comment", {
                  maxLength: {
                    value: 50,
                    message: "Можно ввести максимум 50 символа!",
                  },
                })}
                className="post__commentsInput"
              ></textarea>
              <div className="modal__context">
                {errors?.comment && (
                  <p>{errors?.comment?.message || "Error!"}</p>
                )}
              </div>
              <button type="submit" className="post__commentsButton">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
