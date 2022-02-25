import React from 'react';
import PostImg from './postElements/PostImg';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const Post = ({post}) => {
    const {content,imgUrl,time,writeName,writeId,postId} = post;
    const navigate = useNavigate()
    const goDetail = ()=>{
        navigate(`/detail/${postId}`, {state:post})
    }
    return (
        <PostWrap onClick={goDetail}>
            <PostImgBox>
            <PostImg
            />
            </PostImgBox>
        </PostWrap>
    );
};

const PostWrap = styled.li`
    width:100%;
    border-radius:5px;
    cursor:pointer;
    overflow:hidden;
`

const PostImgBox = styled.div`
    padding:50%;
    position: relative;
`

export default Post;