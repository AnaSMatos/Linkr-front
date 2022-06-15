import styled from "styled-components"

export default function Post(props){
    const {message}= props;
    return(
        <PostContainer>
            <h1>{message}</h1>
        </PostContainer>
    );
}

const PostContainer = styled.article`
width: 100%;
min-height: 232px;
background: #171717;
margin-bottom: 14px;
`;
