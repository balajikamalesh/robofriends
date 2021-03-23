import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from './constants';
import { action } from './actions';

export interface stateSearch {
    searchField: string;
}

const initialStateSearch : stateSearch = {
    searchField: ''
}

export const searchRobots = (state: stateSearch = initialStateSearch, action: action = {}  ) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

export interface stateRobots {
    isPending: boolean;
    robots: any[];
    error: string;
}

const initialStateRobots : stateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state: stateRobots = initialStateRobots, action: action = {} ) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false}
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload}
        default:
            return state; //always return default state
    }
}
//we may need more reducers