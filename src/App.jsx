import React,{useEffect} from'react';
import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';
import Header from './components/header/Header';
import Lazy from './shared/Lazy';

import PostWrite from './components/post/PostWrite';
import PostDetail from './components/post/PostDetail';
import { loginCheck } from './redux/modules/user';
import {Routes,Route} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components';

const App = () => {  
  const dispatch = useDispatch()
  const isLogin = useSelector(state=>state.user.isLogin)
  const user = useSelector(state=>state)
  const isFetch = useSelector(state=>state.posts.isFetch)
  const msg = useSelector(state=>state.posts.msg)
  useEffect(()=>{

      if(sessionStorage.getItem('user')){
        dispatch(loginCheck(JSON.parse(sessionStorage.getItem('user'))))
      }
  },[])
  return (
  <>
    {/* {!isFetch&&<Lazy msg={msg}/>} */}
    <Header isLogin={isLogin}/>
    <MainWrap>
      <Routes>
        <Route path={'/detail/:id'} element={<PostDetail/>}/>
        <Route path={'/'} element={<Main /> }/>
        <Route path={'/write'} element={<PostWrite isLogin={isLogin}/>}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/Join'} element={<Join/>}/>
      </Routes>
    </MainWrap>
  </>
  );
}
const MainWrap = styled.section`
    margin:0 auto;
    max-width: 935px;
    width:50%;
    margin:0 auto;
`

export default App;
