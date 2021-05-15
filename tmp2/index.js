const redux = require("redux");

//actions
//action types
const ADD_NUMBER = "ADD_NUMBER";
const addNumber = () => {
  return {
    type: ADD_NUMBER,
  };
};

//reducers

const initalState = {
  number: 32,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

//store

//subscribe - view - dispatch
