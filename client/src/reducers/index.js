import {SET_CURRENT_USER,SET_LEVEL} from '../actions/types';
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
        case SET_LEVEL:
        console.log(action.level);
        return{
            ...state,
            level:action.level
        }
        default:
            return state;
    }
}