import React, { useEffect } from 'react';
import Post from './Post'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBoard } from '../../redux/modules/post';

const PostList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts.posts)
    const userStatus = useSelector(state=>state.user.isLogin)
    console.log()
    useEffect(()=>{
        dispatch(getBoard())
    },[])
    return (
        <PostWrap>
            {/* {posts.map(post =>
                <Post
                    key={post.id}
                    post={post}
                />
                )} */}
        </PostWrap>
    );
};

const PostWrap = styled.ul`
    width:100%;
    padding:50px 0;
    display: flex;
    flex-wrap: wrap;
    li{
        width:31.333%;
        margin-right:3%;
    }
    li:nth-child(3n+3){
        margin-right:0;
        margin-bottom:28px;
    }
`

export default PostList;