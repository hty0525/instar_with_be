import React, { useEffect, useRef, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { writeBoard } from '../../redux/modules/post';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostWrite = ({isLogin}) => {
    const [uploadImg,setImg] = useState(false)
    const [content,setContent] = useState()
    const [layout,setLayout] =useState('column')
    const userInfo = useSelector(state=>state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const uploadRef = useRef();
    const contentRef = useRef()
    const getDate = ()=>{
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        const time = `${year}년 ${month}월 ${date}일`
        return time
    }
    const handleWrite = (e)=>{
        e.preventDefault()
        if(!uploadImg){
            return alert('이미지를 등록해주세요')
        }
        if(contentRef.current.value ===''){
            return alert('내용을 입력해주세요')
        }

        const img_url = 'asdf';

        const data ={
            data:{
                content,
                img_url,
                board_status:layout
            },
            token:userInfo.token,
            navigate
        }
        console.log(data)
        dispatch(writeBoard(data))
    }
    useEffect(()=>{
        // if(!isLogin){
        //     navigate('/');
        //     return alert('정상적인 접근이 아닙니다!')
        // }
    },[isLogin])
    const handleImg = ()=>{
        const fileReader = new FileReader();
        const file = uploadRef.current.files[0];
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImg(fileReader.result);
        };
    }

    const selectLayout = (e)=>{
        for(let key of e.currentTarget.children){
            key.classList.remove('on')
        }
        setLayout(e.target.name)
        e.target.classList.add('on')
    }

    const contentPreview = (e)=>{
        setContent(e.target.value)
    }
    return (
        <>
            <PostWriteH>
                게시글 작성
            </PostWriteH>
            <LayoutBox onClick={selectLayout}>
                <LayoutBtn name='column' className='on'>
                    세로
                </LayoutBtn>
                <LayoutBtn name='row-reverse'>
                    오른쪽
                </LayoutBtn>
                <LayoutBtn name ='row'>
                    왼쪽
                </LayoutBtn>
            </LayoutBox>
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
                <Preview layout ={layout}>
                    <ContentBox>
                        <Content>
                            {getDate()}
                        </Content>
                        <Content>
                            {userInfo.account_name}
                        </Content>
                        <Content>
                            {content}
                        </Content>
                    </ContentBox>
                    <Thumbnail imgUrl={uploadImg}>
                    </Thumbnail>
                </Preview>
                <WriteArea
                    rows="10"
                    maxLength={150}
                    ref={contentRef}
                    onChange={contentPreview}
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

const Preview = styled.ul`
    display:flex;
    flex-direction:${props=>props.layout};
    margin:30px 0;
    background:white;
    border-radius:15px;
    padding:20px;
    box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
`

const ContentBox = styled.li`

`

const Content = styled.div`
    
`

const LayoutBox = styled.div`
    margin: 30px 0;
`
const LayoutBtn = styled.button`
    padding:10px;
    margin-right:10px;
    background:powderblue;
    border-radius:15px;
    transition:all 0.7s;
    &:hover{
        background:blue;
        color:white;
    }
    &.on{
        background:blue;
        color:white;
    }
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