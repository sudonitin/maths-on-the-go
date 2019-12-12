import {SET_CURRENT_USER,SET_LEVEL,SET_CATEGORY, SET_SCORE} from './types'
import setAuthToken from '../components/setAuthToken';


export const setCurrentUser = (user,token) => dispatch => {
    //console.log('fetching');
    //console.log(token);
    setAuthToken(token);
    dispatch({
    type:SET_CURRENT_USER,
    user
    })
}

export const setLevel = (level) => ({
    type:SET_LEVEL,
    level
})

export const setCategory = (category) => ({
    type:SET_CATEGORY,
    category
})

export const logout = () => dispatch =>{
    localStorage.clear();
    dispatch(setCurrentUser({},null));
    dispatch(setLevel(null));
}

export const setScore = (score) => ({
    type:SET_SCORE,
    score
})