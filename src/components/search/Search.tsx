import "./search.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { closeSearch } from "../../redux/search/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { valueSearch } from "../../redux/search/action";

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { flagSearch } = useTypesSelector((state) => state.search);
  return (
    <>
      {flagSearch && (
        <>
          <input
            onChange={(e) => dispatch(valueSearch(e.target.value))}
            placeholder="Поиск статьи по заголовку или тексту..."
            className="search"
          ></input>
          <CloseIcon
            onClick={() => dispatch(closeSearch())}
            className="icon-close"
          ></CloseIcon>
        </>
      )}
    </>
  );
};
