import React from "react";
import Pagination from "@mui/material/Pagination";
import "./pogination.scss";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/posts/action";

export const Pogination: React.FC = () => {
  const dispatch = useDispatch();
  const { flagMenu } = useTypesSelector((state) => state.menu);
  const { posts } = useTypesSelector((state) => state.posts);
  React.useEffect(() => {
    dispatch(getPosts("", 1));
  }, []);
  const page = Math.ceil(posts.total / 4);

  return (
    <>
      <div className="pogination">
        {flagMenu ? (
          <Pagination count={page} size="small" disabled />
        ) : (
          <Pagination
            onChange={(_, num) => dispatch(getPosts("", num))}
            count={page}
            size="small"
          />
        )}
      </div>
    </>
  );
};
