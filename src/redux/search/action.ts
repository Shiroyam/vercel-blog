export const closeSearch = () => {
  return {
    type: "CLOSE_SEARCH",
  };
};

export const openSearch = () => {
  return {
    type: "OPEN_SEARCH",
  };
};

export const valueSearch = (text: string) => {
  return {
    type: "VALUE_INPUT",
    payload: text,
  };
};
