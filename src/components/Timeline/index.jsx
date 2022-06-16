import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../Header";
import PostsPage from "../Posts";
import MainContainer from "../Layout/MainContainer";
import CreatePost from "../CreatePost";
import { getContext } from "../../hooks/UserContext";

export default function Timeline() {
  const statusMessages = {
    loadingPosts: "Loading",
    emptArray: "There are no posts yet",
    errorRequest:
      "An error occured while trying to fetch the posts, please refresh the page",
  };
  const [posts, setPosts] = useState(statusMessages.loadingPosts);
  const { url, config } = getContext().contextData;

  useEffect(() => {
    const promisse = axios.get(`${url}/posts`, config);
    promisse
      .then((response) => {
        if (response.length === 0) setPosts(statusMessages.emptArray);
        else setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setPosts(statusMessages.errorRequest);
      });
  }, []);

  return (
      <MainContainer>
        <Header />
        <Page>
          <Title>
            <h2>timeline</h2>
          </Title>
          <Content>
            <Posts>
              <CreatePost image={posts.image}/>
              <PostsPage posts={posts} />
            </Posts>
            <Hashtags className="hashtags">
              <h2>trending</h2>
            </Hashtags>
          </Content>
        </Page>
      </MainContainer>
  );
}

const Page = styled.section`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 835px) {
    .hashtags {
      display: flex;
    }
  }
  @media (min-width: 611px) {
    .post-container{
      border-radius: 16px;
    }
  }
`;

const Title = styled.div`
  padding: 45px 0;
  h2{
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-right: 20px;
`

const Content = styled.div`
  display: flex;
`;


const Hashtags = styled.aside`
  position: sticky;
  width: 301px;
  height: 406px;
  background: var(--color-black);
  border-radius: 16px;
  display: none;
  padding: 9px 16px 30px 16px;
  &>h2{
    font-weight: var(--font-bold);
    font-size: var(--font-size-h2);
    color: var(--color-white);
  }
`;
