import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Modal from 'react-modal';

import HashtagHook from "../../hooks/HashtagHook.js";
import { getContext } from "../../hooks/UserContext";

import Like from "./../Like";

Modal.setAppElement('.root');

export default function Post(props) {
  const { id, message, image, username, postData, index, userId, setPosts } = props;
  const { postDescription, postImage, postTitle, postUrl } = postData;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { url, config } = getContext().contextData;


  function deletePost() {
    setLoading(true);
    const promise = axios.delete(`${url}/posts/${id}`, config);
    promise
    .then(res => {
      setLoading(false);
      setModalIsOpen(false);
      const getPromise = axios.get(`${process.env.REACT_APP_URL}/posts`, config);
      getPromise
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
    })
    .catch(err => {
      setLoading(false);
      setModalIsOpen(false);
      alert('An error occured while trying to delete the post, please try again later');
    })
  }

  return (
    <PostContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            margin: 'auto',
            background: '#333333',
            borderRadius: '50px',
            width: '500px',
            height: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }
        }}
      >
        <Title>Are you sure you want to delete this post?</Title>
        <div>
          <ButtonNo variant="secondary" onClick={()=> setModalIsOpen(false)}>No, go back</ButtonNo>
          <ButtonYes variant="primary" onClick={deletePost}>Yes, delete it</ButtonYes>
        </div>
      </Modal>
      <LeftInfons>
        <img src={image} alt="userPhoto" />
        <Like id={id} />
      </LeftInfons>
      <RightInfons>
        <Icons>
          <button onClick={()=> alert(`clicou editar no post ${id}`)}><i className="fa-solid fa-pen"></i></button>
          <button onClick={()=> setModalIsOpen(true)}><i className="fa-solid fa-trash-can"></i></button>
        </Icons>
        <Link to={`/user/${userId}`}>
          <h3>{username}</h3>
        </Link>
        <p>
          <HashtagHook text={message} index={index} />
        </p>
        <a href={postUrl} target="_blank" rel="noreferrer">
          <PostInfos>
            <div>
              <p>{postTitle}</p>
              <p>
                <small>{postDescription}</small>
              </p>
              <p>
                <small>{postUrl}</small>
              </p>
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
    cursor: pointer;
  }
  i{
    font-size: 15px;
    color: #FFFFFF;
  }
`

const Title = styled.h1`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 34px;
  color: #FFFFFF;
  margin-bottom: 35px;
  text-align: center;
`

const ButtonYes = styled.button`
  width: 134px;
  height: 37px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 18px;
  background: #1877F2;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
`

const ButtonNo = styled.button`
  width: 134px;
  height: 37px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 18px;
  background: #FFFFFF;
  border-radius: 5px;
  color: #1877F2;
  margin-right: 15px;
  cursor: pointer;
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
  justify-content: start;
  height: 100%;
  width: var(--left-infos-width);
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
  small {
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
