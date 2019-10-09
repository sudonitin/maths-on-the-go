import {SET_CURRENT_USER} from './types'
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
 
export const logout = () => dispatch =>{
    localStorage.clear();
    dispatch(setCurrentUser({},null));
}