import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:5000/api/v1',
    withCredentials : true,
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
});

export const signUp = async(data) => {
    try{
        const response = await api.post('/auth/sign-up',data);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

export const signIn = async(data) => {
    try{
        const response = await api.post('/auth/sign-in',data);
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}