import axios from 'axios'


// Axios 기초
const instance = axios.create({
    baseURL:"http://3.38.179.179/"
})



export const userApi = {
    //회원가입
    signUp: userData =>
        instance.post("api/register",        
            userData
        ),
    logIn: loginData =>
        instance.post("api/login",
        loginData
        ),
    logOut: data => data,
}

export default instance