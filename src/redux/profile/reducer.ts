interface ProfileAction {
  type: string;
}

interface ProfileState {
  toggleFlag: boolean;
}

const initState: ProfileState = {
  toggleFlag: true,
};

export const profileReducer = (
  state = initState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case "TOGGLE_POSTS":
      return { ...state, toggleFlag: true };
    case "TOGGLE_COMMENTS":
      return { ...state, toggleFlag: false };
    default:
      return state;
  }
};
