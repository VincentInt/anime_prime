const defaultState = {
  usersData: [],
  userLogin: { statusLogin: false, userName: "", login: "", password: "" },
};

const ADD_USER = "ADD_USER";
const LOGIN_USER = "LOGIN_USER";

export const LEAVE_USER = "LEAVE_USER";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, usersData: [...state.usersData, action.payload] };
    case LOGIN_USER:
      return { ...state, userLogin: { ...action.payload } };
    case LEAVE_USER:
      return { ...state, userLogin: defaultState.userLogin };
    default:
      return state;
  }
};
export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const leaveUserAction = () => ({ type: LEAVE_USER });
