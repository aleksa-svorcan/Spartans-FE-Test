import { ADD_USERS } from "./actions.js";

console.log('check add users', ADD_USERS )
const initialState = {
  users: [
  	{
  		id: 1,
  		name: 'name1',
  	},
  	{
  		id: 2,
  		name: 'name2',
  	},
  	{
  		id: 3,
  		name: 'name3',
  	},
  	{
  		id: 4,
  		name: 'name4',
  	}
  ]
};


function usersDataReducer(state = initialState, action){
    switch(action.type) {
        case ADD_USERS:
          return Object.assign({}, state, 
              {
                users: [...state.users, action.users]
               }); 
         default: 
           return state;
     }
}

export default usersDataReducer;