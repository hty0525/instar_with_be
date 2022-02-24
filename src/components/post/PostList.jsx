import React, { useEffect } from 'react';
import Post from './Post'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PostList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts.posts)
    const userStatus = useSelector(state=>state.user.isLogin)
    const goCreatePost = ()=>{
        if(!userStatus){
            return alert('로그인뒤 작성 가능합니다!')
        }
        navigate('/write')
    }
    useEffect(()=>{
        
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