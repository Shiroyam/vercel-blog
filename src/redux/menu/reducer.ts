interface MenuState {
  flagMenu: boolean;
}

interface MenuAction {
  type: string;
  payload?: any;
}

const initialState: MenuState = {
  flagMenu: false,
};

export const menuReducer = (
  state = initialState,
  action: MenuAction
): MenuState => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { ...state, flagMenu: false };
    case "OPEN_MENU":
      return { ...state, flagMenu: true };
    default:
      return state;
  }
};
