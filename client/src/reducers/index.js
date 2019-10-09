import {SET_CURRENT_USER} from '../actions/types';
const isEmpty = require('is-empty');


const initialState = {
    user:{},
    isAuthenticated:false,
    level:'',
    category:''
}

export default function(state = initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated:!isEmpty(action.user),
            user:action.user
        }
        default:
            return state;
    }
}