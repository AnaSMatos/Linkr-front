import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

export default function Post(props) {
  const { message, image, likes, username, postData } = props;
  const { postDescription, postImage, postTitle, postUrl } = postData;
  return (
    <PostContainer className="post-container">
      <LeftInfons>
        <img src={image} alt="userPhoto" />
        <BiHeart />
        <p>
          <small>{likes} likes</small>
        </p>
      </LeftInfons>
      <RightInfons>
        <h3>{username}</h3>
        <p>{message}</p>
        <a href={postUrl} target="_blank" rel="noreferrer">
          <PostInfos>
            <div>
              <h3>{postTitle}</h3>
              <p>{postDescription}</p>
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

const PostContainer = styled.article`
  width: 100%;
  max-width: var(--post-max-width);
  height: 100%;
  background: var(--color-black);
  margin-bottom: var(--post--margin--bottom);
  padding: var(--padding-post-container);
  font-size: var(--font-size-normal);
  line-height: 20px;
  color: var(--color-grey);
  display: flex;
  p {
    margin: 7px 0 14px 0;
  }
  small {
    font-size: var(--font-size-small);
    margin: 12px 0 0 0;
  }
  strong {
    font-weight: var(--font-bold);
  }
  h3 {
    font-size: 17px;
  }
  small,
  strong,
  h3 {
    color: var(--color-white);
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-bottom: 17px;
  }
`;

const LeftInfons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 69px;
  svg {
    font-size: 22px;
  }
`;
const RightInfons = styled.div`
  width: 100%;
  min-height: 207px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PostInfos = styled.article`
  border: var(--post-border);
  border-radius: 11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  p {
    margin: 5px 0 5px 0;
    color: var(--color-light-grey);
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
    overflow: hidden;
    padding: 7px;
    margin-left: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
