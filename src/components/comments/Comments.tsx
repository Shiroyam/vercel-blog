import React from "react";
import "./comments.scss";
import { useTypesSelector } from "../../hooks/useTypeSelector";

export const Comments: React.FC = () => {
  const { comment } = useTypesSelector((state) => state.comments);
  return (
    <>
      {comment.map((comments) => (
        <div key={comments._id} className="comments">
          <div className="comments__header">
            <div className="comments__fullName">{comments.user.fullName}</div>
            <div className="comments__date">
              {comments.user.createdAt.slice(0, 10)} в{" "}
              {comments.user.createdAt.slice(11, 19)}
            </div>
          </div>
          <div className="comments__text">{comments.text}</div>
        </div>
      ))}
    </>
  );
};
