interface PostAction {
  type: string;
  payload: any[];
}

interface PostState {
  post: any;
}

const initeState: PostState = {
  post: {},
};

export const postReducer = (
  state = initeState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case "GET_POST":
      return { post: action.payload };
    default:
      return state;
  }
};
