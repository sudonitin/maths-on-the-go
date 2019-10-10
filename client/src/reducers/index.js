import {SET_CURRENT_USER,SET_LEVEL,SET_CATEGORY} from '../actions/types';
const isEmpty = require('is-empty');


const initialState = {
    user:{},
    isAuthenticated:false,
    level:null,
    category:null
}

export default function(state = initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated:!isEmpty(action.user),
            user:action.user
        }
        case SET_LEVEL:
        console.log(action.level);
        return{
            ...state,
            level:action.level
        }
        case SET_CATEGORY:
        console.log(action.category)
        return{
            ...state,
            category:action.category
        }
        default:
            return state;
    }
}