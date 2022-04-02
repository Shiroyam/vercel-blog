interface PostsAction {
  type: string;
  payload: any[];
}

interface PostsState {
  posts: any;
}

const initState: PostsState = {
  posts: {}
};

export const postsReducer = (
  state = initState,
  action: PostsAction
) => {
  switch (action.type) {
    case "GET_POSTS":
      return { posts: action.payload };
    default:
      return state;
  }
};
