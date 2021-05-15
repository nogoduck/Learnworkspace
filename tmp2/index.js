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
    switch()
};

//store

//subscribe - view - dispatch
