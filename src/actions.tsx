import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from './constants';

export interface action {
    type?: string;
    payload?: string;
}

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch: any) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: json}))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}))
}