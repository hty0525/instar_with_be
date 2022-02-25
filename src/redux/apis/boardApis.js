import axios from 'axios'
import post from '../modules/post'

// Axios 기초

const token = sessionStorage.getItem('user') ? `Bearer ${JSON.parse(sessionStorage.getItem('user')).token}` : null
const instance = axios.create({
    baseURL:"http://3.38.179.179/",
    
})
export const boardApis = {
    writeBoard : ({data,token})=>
        instance.post('api/board',data,{
            headers : {
                Authorization:token
            }
        }),
        

    getBoard: (data)=>
        instance.get('api/board')
}


export default instance