interface SearchAction {
  type: string;
  payload: string;
}

interface SearchState {
  flagSearch: boolean;
  text: string | undefined;
}

const initState: SearchState = {
  flagSearch: false,
  text: "",
};

export const searchReducer = (
  state = initState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, flagSearch: true };
    case "CLOSE_SEARCH":
      return { ...state, flagSearch: false };
    case "VALUE_INPUT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
