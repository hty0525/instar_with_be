import React, { useState,useEffect } from 'react';
import PostImg from './postElements/PostImg';

import styled from 'styled-components';
import { useLocation,useNavigate,useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { likePostFB,deletePostFB } from '../../redux/modules/post';
const PostDetail = () => {
    const userInfo = useSelector(state=>state.user.user);
    const postInfo = useSelector(state=>state.posts.posts);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const params = useParams();
    const {content,imgUrl,time,writeName,likeId,id,writeId} = useLocation().state;
    console.log(userInfo.id)
    const [Like,setLike] = useState(false);
    const [LikeCount,setCount] = useState(likeId.length);
    const handleLike = ()=>{
        const data = {
            id,
            likeId
        }
        if(userInfo.id===null){
            return alert('로그인을 해주세요!')
        }

        if(likeId.includes(userInfo.id)||Like){
            const likeList = likeId.filter(item=> item !== userInfo.id)
            data.likeId=likeList
            let count = LikeCount-1
            setCount(count)
            
        }else{
            data.likeId=[...likeId,userInfo.id]
            let count = LikeCount+1
            setCount(count)
        }
        dispatch(likePostFB(data))
        setLike(!Like)
    }
    useEffect(() => {
        if(likeId.includes(userInfo.id)){
            setLike(true);
        }
    }, [])
    

    const handleDelete = ()=>{
        if(window.confirm("삭제하시겠습니까?")){
            dispatch(deletePostFB(id))
            navigate('/',{replace:true})
        }
    }

    return (
        <>
            <PostDetailWrap>
                <PostDetailImgBox>
                    <PostImg imgUrl={imgUrl}/>
                </PostDetailImgBox>
                <PostContentBox>
                    {writeName}
                    {time}
                    <br></br>
                    {content}
                <LikeBox>
                    <LikeBtn onClick={handleLike}>
                        {Like ? "♥" : "♡" }
                        {LikeCount}
                    </LikeBtn>
                </LikeBox>
                </PostContentBox>
            </PostDetailWrap>
            {writeId == userInfo.id ?
            <DeleteEdit>
                <DeleteEditBtn>
                    수정하기
                </DeleteEditBtn>
                <DeleteEditBtn onClick={handleDelete}>
                    삭제하기
                </DeleteEditBtn>
            </DeleteEdit>
            :
            null
            }
        </>
    );
};

const PostDetailWrap = styled.ul`
    width:100%;
    display:flex;
    padding:30px;
    li{
        aspect-ratio: 1 / 1;
        overflow:hidden;
    }
`

const PostDetailImgBox = styled.li`
    position: relative;
    max-width:50%;
    padding-top:50%;
`
const PostContentBox = styled.li`
    padding:10px;
`

const LikeBox = styled.div`
    
`

const LikeBtn = styled.button`
    cursor: pointer;
`
const DeleteEdit = styled.div`
    
`
const DeleteEditBtn = styled.button`
    margin-right:20px;
`
export default PostDetail;