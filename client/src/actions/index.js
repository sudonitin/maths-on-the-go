export const setCurrentUser = user => ({
    type:'SET_CURRENT_USER',
    user
})
 
export const logout = () => dispatch =>{
    localStorage.clear();
    dispatch(setCurrentUser({}));
}