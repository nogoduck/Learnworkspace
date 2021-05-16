const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
//actions
//action types
const ADD_NUMBER = "ADD_NUMBER";
const ADD_VIEW = "ADD_VIEW";
const addNumber = () => {
  return {
    type: ADD_NUMBER,
  };
};

//reducers
const defaultNumber = {
  number: 32,
};
const controlRsseducer = (state = defaultNumber, action) => {
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

const viewState = {
  viewCount = 100;

}

const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        viewCount : state.viewCount+1
      }
    default:
      return state;
  }
}


//store
const store = createStore(controlRsseducer, applyMiddleware(logger));

//subscribe - view - dispatch
// store.subscribe(() => {
//   console.log("subscribe >> ", store.getState());
// });

store.dispatch(addNumber());
store.dispatch(addNumber());
store.dispatch(addNumber());
store.dispatch(addNumber());
store.dispatch(addNumber());
