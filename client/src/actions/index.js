import {SET_CURRENT_USER} from './types'


export const setCurrentUser = user => dispatch => {
    //console.log('fetching');
    dispatch({
    type:SET_CURRENT_USER,
    user
    })
}
 
export const logout = () => dispatch =>{
    localStorage.clear();
    dispatch(setCurrentUser({}));
}