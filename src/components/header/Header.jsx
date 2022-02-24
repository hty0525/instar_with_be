import React from 'react';
import Nav from './Nav';

import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
const Header = ({isLogin}) => {
    const navigate = useNavigate();

    const goHome = ()=>{
        navigate('/')
    }

    return (
        <HeaderWrap>
            <HeaderBox>
                <Logo onClick={goHome}>
                    HangHae99
                </Logo>
                <Nav isLogin={isLogin}/>
            </HeaderBox>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    width:100%;
    margin:0 auto;
    position: sticky;
    top:0;
    left:0;
    padding:10px 0;
    border-bottom: 1px solid #dbdbdb;
    z-index: 5;
    background:white;
`

const HeaderBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:50%;
    margin:0 auto;
`

const Logo = styled.h1`

`
export default Header;