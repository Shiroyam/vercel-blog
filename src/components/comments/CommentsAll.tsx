import React from "react";
import "./comments.scss";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { getCommentsAll } from "../../redux/comments/action";
import { deleteComment, patchComment } from "../../redux/editing/action";

export const CommentsAll: React.FC = () => {
  const dispatch = useDispatch();
  const { commentAll } = useTypesSelector((state) => state.comments);
  React.useEffect(() => {
    dispatch(getCommentsAll());
  }, []);
  const [text, setText] = React.useState("");

  return (
    <>
      {commentAll
        .filter((comments) => comments.user._id === localStorage.getItem("id"))
        .map((comments) => (
          <div key={comments._id} className="comments">
            <div className="comments__header">
              <div className="comments__fullName">{comments.user.fullName}</div>
              <div className="comments__date">{comments.user.createdAt}</div>
            </div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="comments__textarea"
            >
              {comments.text}
            </textarea>
            <div className="editing">
              <button
                onClick={() => dispatch(patchComment(text, comments._id))}
                className="editing__btnEditing"
              >
                Изменить
              </button>
              <button
                onClick={() => dispatch(deleteComment(comments._id))}
                className="editing__btnDeleted"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
