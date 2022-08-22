import { HANDLE_USER } from "../actions/loginActions";

export const initialLoginState = {
  user: "",
  password: "",
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case HANDLE_USER: {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    default:
      return state;
  }
};
