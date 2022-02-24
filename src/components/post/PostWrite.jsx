import React, { useEffect, useRef, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { writePostFB } from '../../redux/modules/post';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostWrite = ({isLogin}) => {
    const [uploadImg,setImg] = useState(false)
    const userInfo = useSelector(state=>state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const uploadRef = useRef();
    const contentRef = useRef()
    const handleWrite = (e)=>{
        e.preventDefault()
        if(!uploadImg){
            return alert('이미지를 등록해주세요')
        }
        if(contentRef.current.value ===''){
            return alert('내용을 입력해주세요')
        }
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        const postId = Date.now()
        const time = `${year}년 ${month}월 ${date}일`
        const data ={
            writeId:userInfo.id,
            writeName:userInfo.name,
            content:contentRef.current.value,
            uploadImg,
            time,
            postId,
        }
        console.log(data)
        dispatch(writePostFB(data))
    }

    useEffect(()=>{
        if(!isLogin){
            navigate('/');
            return alert('정상적인 접근이 아닙니다!')
        }
    },[isLogin])

    const handleImg = ()=>{
        const fileReader = new FileReader();
        const file = uploadRef.current.files[0];
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImg(fileReader.result);
        };
    }
    return (
        <>
            <PostWriteH>
                게시글 작성
            </PostWriteH>
            <UploadLabel htmlFor='upload'>
                파일올리기
            </UploadLabel>
                <Upload
                    type='file'
                    ref={uploadRef}
                    onChange={handleImg}
                    id='upload'
                    >
                </Upload>
            <PostWriteForm
                onSubmit={handleWrite}
            >
                <Thumbnail imgUrl={uploadImg}>

                </Thumbnail>
                <WriteArea
                    rows="10"
                    ref={contentRef}
                >
                </WriteArea>
                <WriteBtn>
                    작성하기
                </WriteBtn>
            </PostWriteForm>
        </>
    );
};

const Thumbnail = styled.div`
    padding:10%;
    border:1px solid black;
    background:center no-repeat url(${props => props.imgUrl});
    background-size:100%;
    width:10%;
    margin:0 auto;
`



const PostWriteH = styled.h1`
    
`


const PostWriteForm = styled.form`
    
`

const WriteLabel = styled.label`
    
`

const WriteArea = styled.textarea`
    width:100%;
    padding:10px;
    columns: 8;
`

const WriteBtn = styled.button`
    
`

const Upload = styled.input`
    display:none;
`

const UploadLabel = styled.label`
    cursor: pointer;
`

export default PostWrite;