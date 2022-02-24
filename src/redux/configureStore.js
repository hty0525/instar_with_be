import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user'
import posts from './modules/post'
const store = configureStore({
    reducer:{
        user,
        posts
    }
})

export default store