export const ADD_USERS = 'ADD_USERS'
export const SEARCH_VALUE = 'SEARCH_VALUE'

export const addUsers = (users) => ({
  users,
  type: ADD_USERS
});

export const searchValue = (searchValue) => ({
	searchValue,
	type: SEARCH_VALUE
})