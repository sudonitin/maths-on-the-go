import {SET_CURRENT_USER,SET_LEVEL} from './types'
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

export const logout = () => dispatch =>{
    localStorage.clear();
    dispatch(setCurrentUser({},null));
    dispatch(setLevel(null));
}