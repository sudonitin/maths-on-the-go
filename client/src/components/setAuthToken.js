import axios from 'axios'

const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    }
    else{//when empty array is sent
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;