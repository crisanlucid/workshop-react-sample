import * as actionTypes from './actions';
//default state
const initState = {
  username: 'Anonymous',
};

//create reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.newUsername,
      };
    default:
      return state;
  }
};

export default reducer;
