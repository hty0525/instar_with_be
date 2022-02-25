import PostApis from '../service/postApis';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { boardApis } from '../apis/boardApis';
import axios from 'axios'
const postApis = new PostApis();

const initialState = {
    posts:[],
    isFetch:true,
}


export const writeBoard = createAsyncThunk("api/write",
    async (data,thunkAPI) =>{
        const result = await boardApis.writeBoard(data)

    }
)

export const getBoard = createAsyncThunk("api/board",
    async () =>{
        const result = await boardApis.getBoard()
        return result.data.data
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
        [writeBoard.pending]:(state)=>{
            state.status = 'success'
            state.isFetch = false
        },
        [writeBoard.fulfilled]:(state)=>{
            state.status = 'success'
            state.isFetch = true
            state.msg ="글작성을 완료했습니다."
        },
    }
})




export default posts.reducer