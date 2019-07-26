import * as actionTypes from './actions';
//default state
const initState = {
  username: 'Anonymous',
};

//create reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case value:
      return {};
    default:
      return state;
  }
};
