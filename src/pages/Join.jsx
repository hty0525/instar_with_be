import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { join} from '../redux/modules/user';
import { checkEmail,checkNickname } from '../shared/function';
const Join = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const nameRef = useRef();
    const pwRef = useRef();
    const pwconfirm = useRef()
    const navigate = useNavigate()
    const handleJoin = (e)=>{
        e.preventDefault();
        const account_email = emailRef.current.value;
        const account_name = nameRef.current.value;
        const password = pwRef.current.value;
        const password_check = pwconfirm.current.value;

        if(!checkEmail(account_email).res){
            return alert(checkEmail(account_email).msg)
        }
        if(!checkNickname(account_name).res){
            return alert(checkNickname(account_name).msg)
        }
        if(!password||!password_check){
            return alert('빈칸을 입력해주세요')
        }else if(password!==password_check){
            return alert('비밀번호를 확인해주세요')
        }
        const joinData = {
            data:{
                account_email,
                account_name,
                password,
                password_check
            },
            navigate
        }
        dispatch(join(joinData))
    }
    return (
        <JoinWrap onSubmit={handleJoin}>
            <JoinH>
                회원가입
            </JoinH>
            <JoinLabel>
                아이디(Email 형식으로 입력해주세요)
            </JoinLabel>
            <JoinInput
                placeholder='이메일을 입력해주세요'
                ref={emailRef}
            />

            <JoinLabel>
                닉네임(영어로 최소 3자이상 입니다)
            </JoinLabel>
            <JoinInput
                placeholder='닉네임을 입력해주세요'
                ref={nameRef}
            />

            <JoinLabel>
                비밀번호
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 입력해주세요'
                ref={pwRef}
                type="password"
            />

            <JoinLabel>
                비밀번호 확인
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 다시 입력해주세요'
                ref={pwconfirm}
                type="password"
            />
            <JoinBtn>
                회원가입하기
            </JoinBtn>
        </JoinWrap>
    );
};

const JoinWrap = styled.form`
    width:100%;
    border:10px solid black;
    padding:10px;
`

const JoinH = styled.h1`
    width:100%;
    margin-bottom:20px;
`

const JoinLabel = styled.label`
    width:100%;
`
const JoinInput = styled.input`
    width:100%;
    padding:5px 10px;
    margin-bottom:10px;
`

const JoinBtn = styled.button`
    width:100%;
    padding:10px;
    background:black;
    color:white;
`

export default Join;