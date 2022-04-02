interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthState {
  flagAuth: boolean;
}

const initState: AuthState = {
  flagAuth: false,
};

export const authorizationReducer = (state = initState, action: AuthAction) => {
  switch (action.type) {
    case "OPEN_AUTH":
      return { ...state, flagAuth: true };
    case "CLOSE_AUTH":
      return { ...state, flagAuth: false };
    case "POST_AUTH":
      return state;
    default:
      return state;
  }
};
