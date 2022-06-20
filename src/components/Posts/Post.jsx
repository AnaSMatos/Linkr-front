import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import HashtagHook from "../../hooks/HashtagHook.js";

export default function Post(props) {
  const { message, image, likes, username, postData, index } = props;
  const { postDescription, postImage, postTitle, postUrl } = postData;
  return (
    <PostContainer>
      <LeftInfons>
        <img src={image} alt="userPhoto" />
        <BiHeart />
        <p>
          <small>{likes} likes</small>
        </p>
      </LeftInfons>
      <RightInfons>
        <Icons>
          <button onClick={()=> alert("clicou editar")}><i class="fa-solid fa-pen"></i></button>
          <button onClick={()=> alert("clicou deletar")}><i class="fa-solid fa-trash-can"></i></button>
        </Icons>
        <h3>{username}</h3>
        <p><HashtagHook text = {message} index = {index} /></p>
        <a href={postUrl} target="_blank" rel="noreferrer">
          <PostInfos>
            <div>
              <p>{postTitle}</p>
              <p><small>{postDescription}</small></p>
              <p><small>{postUrl}</small></p>
            </div>
            <img src={postImage} alt="postImage" />
          </PostInfos>
        </a>
      </RightInfons>
    </PostContainer>
  );
}

const Icons = styled.div`
  display: flex;
  position: absolute;
  right: 5%;
  button{
    background: none;
    border: none;
  }
  i{
    font-size: 15px;
    color: #FFFFFF;
  }
`

const PostContainer = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: var(--post-max-width);
  background: var(--color-black);
  margin-bottom: var(--post--margin--bottom);
  padding: var(--padding-post-container);
  font-size: var(--font-size-big);
  color: var(--color-white);
  border-radius: var(--post-border-radius);
  display: flex;
  p {
    margin: var(--margin-message);
    color: var(--color-dark-grey);
  }
  small {
    font-size: var(--font-size-small);
    color: var(--color-white);
  }
  strong {
    font-weight: var(--font-bold);
    color: var(--color-white);
  }
  h3 {
    font-size: var(--font-size-name);
    color: var(--color-white);
    line-height: 20px;
  }
  
  img {
    width: var(--post-perfil-image-size);
    height: var(--post-perfil-image-size);
    border-radius: 100%;
  }
`;

const LeftInfons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: var(--left-infos-width);
  svg {
    font-size: var(--post-svg-size);
    margin: var(--post-svg-margin);
  }
`;
const RightInfons = styled.div`
  overflow: auto;
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PostInfos = styled.article`
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  p {
    margin: 5px 0 5px 0;
    font-size: var(--font-size-normal);
    color: var(--color-grey);
  }
  small{
    color: var(--color-dark-grey);
  }
  img {
    height: 100%;
    width: 155px;
    border-radius: 0 11px 11px 0;
    margin: 0;
  }
  div {
    width: 100%;
    height: 100%;
    padding: var(--rigth-infos-padding);
    margin-left: var(--rigth-infos-margin);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
