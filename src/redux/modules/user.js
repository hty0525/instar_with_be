import instance, {userApi} from '../apis/userApis';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';



// export const loginFB = createAsyncThunk("api/login",
//     async (data,thunkAPI)=>{
//         try{
//             const result = await userApis.login(data);
//             if(result.ok==true){
//                  여기서 페이지 이동
//                 return result
//             }else{
//                 return 
//             }
//         }catch(error){//예외처리 
//             alert(error);
//             return thunkAPI.rejectWithValue(error.response.message);
//                     //그냥 에러를 보내주는게 아니라 내가 원하는 메세지 전송하려고
//         }
// })

export const join = createAsyncThunk("api/join",
    async ({data,navigate},thunkAPI)=>{
        try{
            const result = await userApi.signUp(data)
            if(result.data.result === 'fail'){
                
                return alert(result.data.msg)
            }else{
                alert(result.data.msg)
                return navigate('/',{replace:true})
            }
        }catch(err){
            console.log(err)
        }
})


export const login = createAsyncThunk("api/login", //로그인 미들웨어
    async ({data,navigate},thunkAPI)=>{
        try{
            const result = await instance.post('api/login',
                data
            )
            if(result.data.result ==='fail'){
                    alert(result.data.msg)
                return false
            }
            alert('로그인 완료')
            navigate('/',{replace:true})
            sessionStorage.setItem('user',JSON.stringify(result.data.data))
            return result.data.data
        }catch{

        }
    })

export const loginCheck = createAsyncThunk("api/login_check",
    async (data,thunkAPI) =>{
        return data
    }
)


const initialState = {
    user : {},
    isLogin:false,
    errorMsg:null,
}

export const user = createSlice({
    name : "user",
    initialState,
    extraReducers : {
        //로그인
        [login.pending.type]: (state)=>{
            state.status = "loading"
        },
        [login.fulfilled.type]: (state,action)=>{
            if(action.payload){
                state.isLogin=true
            }else{
                state.isLogin=false
            }
            state.status = "success"
            state.user = action.payload
        },
        [login.rejected.type]: (state)=>{
        },

        //로그인 체크
        [loginCheck.pending.type]: (state)=>{
            state.status = "loading"
        },
        [loginCheck.fulfilled.type]: (state,action)=>{
            state.status = "success"
            state.user = action.payload
            state.isLogin = true

        },
        [loginCheck.rejected.type]: (state)=>{
            state.status = "fail"
        },
    }}
)


export default user.reducer