// reducers/userReducer.js

const initialState = {
  firstName: null,
  lastName: null,
  fullName: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
        fullName:
          action.payload && state.lastName
            ? `${action.payload} ${state.lastName}`
            : null,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
        fullName:
          action.payload && state.firstName
            ? `${state.firstName} ${action.payload}`
            : null,
      };
    default:
      return state;
  }
};

export default userReducer;
