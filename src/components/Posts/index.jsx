import styled from "styled-components";
import Post from "./Post";

export default function PostsPage(props) {
  const { posts, setPosts } = props;
  return (
    <Posts>
      {typeof posts === "string" ? (
        <p>{posts}</p>
      ) : (
        <>
          {posts.map((post, index) => {
            const { id, message, image, likes, username, postData, userId } = post;
            return (
              <Post
                id={id}
                key={index}
                index={index}
                message={message}
                image={image}
                likes={likes}
                username={username}
                postData={postData}
                idUser={userId}
                setPosts={setPosts}
              />
            );
          })}
        </>
      )}
    </Posts>
  );
}

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > p {
    font-weight: var(--font-bold);
    font-size: 33px;
    color: var(--color-white);
  }
`;
