import PostApis from '../service/postApis';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const postApis = new PostApis();

const initialState = {
    posts:[],
    isFetch:true,
}


export const writePostFB = createAsyncThunk("api/posts",
    async (data,thunkAPI) =>{
        await postApis.addPost(data);
    }
)

export const deletePostFB = createAsyncThunk("api/delete",
    async (data,thunkAPI) =>{
        console.log(data)
        await postApis.deletePost(data)
    }
)

export const likePostFB = createAsyncThunk("api/posts/like",
    async (data,thunkAPI)=>{
        await postApis.likePost(data)
    }
)

const posts = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        isFetch:false,
        msg:null
    },
    extraReducers:{
        [writePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = false
        },
        [writePostFB.fulfilled]:(state)=>{
            state.status = 'success'
            state.isFetch = true
            state.msg ="글작성을 완료했습니다."
        },
        [deletePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = false
        },
        [deletePostFB.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = true
            state.msg ="글삭제를 완료했습니다."
        }
    }
})




export default posts.reducer