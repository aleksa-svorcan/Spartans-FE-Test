import { ADD_USERS, SEARCH_VALUE } from "./actions.js";

const initialState = {
  users: [],
  searchValue: '',
};


function Reducer(state = initialState, action){	
  switch(action.type) {
    case ADD_USERS:
      return Object.assign({}, state, 
      	{
      	  users: action.users ? [...action.users] : []
    		});
    case SEARCH_VALUE: 
    	console.log('action', action.searchValue)
    	return Object.assign({}, state, 
      	{
      	  searchValue: action.searchValue
    		});
      default: 
        return state;
  }
}

export default Reducer;