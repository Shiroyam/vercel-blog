interface CommentsAction {
  type: string;
  payload: any[];
}

interface CommentsState {
  comment: any[];
  commentAll: any[];
}

const initialState: CommentsState = {
  comment: [],
  commentAll: [],
};

export const commentsReducer = (
  state = initialState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case "GET_COMMENTS_POST":
      return { ...state, comment: action.payload };
    case "POST_COMMENTS":
      return state;
    case "GET_COMMENTS_ALL":
      return { ...state, commentAll: action.payload };
    default:
      return state;
  }
};
