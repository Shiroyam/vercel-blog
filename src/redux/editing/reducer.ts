interface EditingAction {
  type: string;
  payload?: any[];
}

interface EditingState {
  post: any;
}

const initState: EditingState = {
  post: {},
};

export const editingReducer = (
  state = initState,
  action: EditingAction
): EditingState => {
  switch (action.type) {
    case "DELETE_POST":
      return state;
    case "DELETE_COMMENT":
      return state;
    case "PATCH_POST":
      return state;
    case "PATCH_COMMENT":
      return state;
    case "GET_POST_EDITING":
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
