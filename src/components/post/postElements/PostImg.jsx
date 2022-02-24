import React from 'react';
import styled from 'styled-components'
const PostImg = ({imgUrl}) => {
    return (
        <PostImage imgUrl={imgUrl}>
            
        </PostImage>
    );
};

const PostImage = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:black center/contain no-repeat url(${props=> props.imgUrl});
`

export default PostImg;