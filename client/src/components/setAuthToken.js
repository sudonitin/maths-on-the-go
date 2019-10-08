import axios from 'axios'

const setAuthToken = token => {
    if(token){
        //console.log(token);
        axios.defaults.headers.common['authorization'] = token;
    }
    else{//when empty array is sent
        delete axios.defaults.headers.common['authorization']
    }
}

export default setAuthToken;