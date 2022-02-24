import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { logout, loginCheck } from '../../redux/modules/user';

const Nav = ({isLogin}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logOut = () => {
        navigate("/", { replace: true })
    }

    const goLoginPage = () => {
        navigate('/login')
    }

    const goJoinPage = () => {
        navigate('/join')
    }

    const goWrtie = ()=>{
        if(!isLogin){
            return alert('로그인 후 이용해 주세요!')
        }
        navigate('/write');
    }

    useEffect(() => {

    }, [])
    return (
        <NavWrap>
            <WriteBtn onClick={goWrtie}>글쓰기</WriteBtn>
            {
                isLogin ?
                    <NavItem>
                        <NavBtn>
                            내정보
                        </NavBtn>
                        <NavBtn>
                            알림
                        </NavBtn>
                        <NavBtn
                            onClick={logOut}>
                            로그아웃
                        </NavBtn>
                    </NavItem>
                    :
                    <NavItem>
                        <NavBtn onClick={goLoginPage}>
                            로그인
                        </NavBtn>
                        <NavBtn onClick={goJoinPage}>
                            회원가입
                        </NavBtn>
                    </NavItem>
            }
        </NavWrap>
    )
}
const NavWrap = styled.ul`
    display:flex;
`
const NavItem = styled.li`
    margin-left:20px;
`

const NavBtn = styled.button`
    margin-left:20px;
`

const WriteBtn = styled.button`
    
`

export default Nav;