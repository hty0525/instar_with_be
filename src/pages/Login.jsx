import React,{useEffect,useRef,useState} from 'react';

import {login} from '../redux/modules/user.js'
import { getCookie,setCookie,deleteCookie } from '../shared/cookie';
import {useNavigate} from'react-router-dom'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginId = useRef();
    const loginPw = useRef();
    
    const handleLogin = (e)=>{
        e.preventDefault();
        const idValue = loginId.current.value;
        const pwValue = loginPw.current.value;
        const data = {
            data : {
                    email:idValue,
                    password:pwValue
                },
            navigate
        }
        dispatch(login(data))
        // navigate('/', {replace:true})
    }
    return (
        <LoginWrap onSubmit={handleLogin}>
            <LoginH>
                로그인
            </LoginH>
            <LoginInputBox>
                <LoginLabel>
                    아이디
                </LoginLabel>
                <LoginInput
                    ref={loginId}
                    />
            </LoginInputBox>
            <LoginInputBox>
                <LoginLabel>
                    비밀번호
                </LoginLabel>
                <LoginInput
                    type='password'
                    ref={loginPw}
                />
                <LoginBtn>
                    로그인하기
                </LoginBtn>
            </LoginInputBox>
        </LoginWrap>
    );
};

const LoginWrap = styled.form`
    width:100%;
    border:10px solid black;
    padding:10px;
    background:white;
    margin-top:100px;
`

const LoginH = styled.h1`
    width:100%;
    margin-bottom:20px;
`

const LoginLabel = styled.label`
    width:100%;
`
const LoginInput = styled.input`
    width:100%;
    height: 42px;
    padding-left: 12px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background:transparent;
    border-bottom: 2px solid #ced4da;
    &:focus {
    border-bottom: 2px solid #5c7cfa;
    }
`

const LoginBtn = styled.button`
    width:100%;
    padding:10px;
    background:black;
    color:white;
`
const LoginInputBox = styled.div`
    width:100%;
`

export default Login;