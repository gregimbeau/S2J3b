// reducers/skillsReducer.js

const initialState = {
  skills: [],
  skillsCount: 0,
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return {
        skills: action.payload,
        skillsCount: action.payload.length,
      };
    default:
      return state;
  }
};

export default skillsReducer;
