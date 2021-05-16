const redux = require("redux");
const createStore = redux.createStore;
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
const store = createStore(reducer);

//subscribe - view - dispatch
store.dispatch(addNumber());

console.log(store.getState());

store.number(() => {
  console.log("Number => ", store.getState());
});
