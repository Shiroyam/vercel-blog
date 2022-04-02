interface CreateAction {
  type: string;
  payload?: any[];
}

interface CreateState {
  create: any[];
}

const initialState = {
  create: [],
};

export const createReducer = (
  state = initialState,
  action: CreateAction
): CreateState => {
  switch (action.type) {
    case "POST_CREATE":
      return state;
    default:
      return state;
  }
};
