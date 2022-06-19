import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "../Header";
import PostsPage from "../Posts";
import MainContainer from "../Layout/MainContainer";
import CreatePost from "../CreatePost";
import { getContext } from "../../hooks/UserContext";
import Hashtags from "../Hashtags/index.jsx";

export default function Timeline() {
  const statusMessages = {
    loading: "Loading",
    emptArray: "There are no posts yet",
    errorRequest:
      "An error occured while trying to fetch the posts, please refresh the page",
  };
  const [posts, setPosts] = useState(statusMessages.loading);
  const [hashtags, setHashtags] = useState([]);
  const { url, config, userImage } = getContext().contextData;
  const { hashtag } = useParams();
  const queryHashtag = hashtag?`?hashtag=${hashtag}`:"";

  useEffect(() => {
    if (config) {
      getPosts();
      getHashtags();
    }
  }, [getContext().contextData]);

  function getPosts() {
    const promisse = axios.get(`${url}/posts${queryHashtag}`, config);
    promisse
      .then((response) => {
        const data = response.data;
        if (data.length === 0) setPosts(statusMessages.emptArray);
        else setPosts(data);
      })
      .catch((error) => {
        console.log(error.response);
        setPosts(statusMessages.errorRequest);
      });
  }
  function getHashtags() {
    const promisse = axios.get(`${url}/hashtag`, config);
    promisse
      .then((response) => {
        setHashtags(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setHashtags(statusMessages.errorRequest);
      });
  }
  return (
<<<<<<< HEAD
      <MainContainer>
        <Header />
        <Page>
          <Title>
            <h2>timeline</h2>
          </Title>
          <Content>
            <Posts>
              <CreatePost setPosts={setPosts}/>
              <PostsPage posts={posts} />
            </Posts>
            <Hashtags className="hashtags">
              <h2>trending</h2>
            </Hashtags>
          </Content>
        </Page>
      </MainContainer>
=======
    <MainContainer>
      <Header />
      <Page>
        <Title>
          <h2>{hashtag ? `# ${hashtag}`: "timeline"}</h2>
        </Title>
        <Content>
          <Posts>
            {hashtag ? <></> : <CreatePost posts={posts} setPosts={setPosts} />}
            <PostsPage posts={posts} />
          </Posts>
          <Hashtags hashtags={hashtags} />
        </Content>
      </Page>
    </MainContainer>
>>>>>>> 2185912300d974c4734470d9f7f84cc1ab6ff244
  );
}

const Page = styled.section`
  width: var(--page-width);
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: var(--tittle-padding);
  h2 {
    font-family: var(--font-family-h2);
    font-weight: var(--font-bold);
    font-size: var(--tittle-font-size);
    color: var(--color-white);
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--post-width);
  margin-right: var(--post-margin);
`;

const Content = styled.div`
  display: flex;
`;
