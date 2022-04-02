interface RegAction {
  type: string;
  payload?: any;
}

interface RegState {
  flagReg: boolean;
}

const initState: RegState = {
  flagReg: false,
};

export const regReducer = (state = initState, action: RegAction): RegState => {
  switch (action.type) {
    case "OPEN_REG":
      return { ...state, flagReg: true };
    case "CLOSE_REG":
      return { ...state, flagReg: false };
    case "POST_REG":
      return state;
    default:
      return state;
  }
};
