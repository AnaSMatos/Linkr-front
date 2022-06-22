import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
// import { ImLoop2 } from "react-icons/im";
import useInterval from "use-interval";

import Header from "../Header";
import PostsPage from "../Posts";
import MainContainer from "../Layout/MainContainer";
import CreatePost from "../CreatePost";
import { getContext } from "../../hooks/UserContext";
import Hashtags from "../Hashtags/index.jsx";
import NewPosts from "../Layout/NewPosts";

export default function Timeline() {
  const statusMessages = {
    loading: "Loading",
    noFollowings: "You don't follow anyone yet. Search for new friends!",
    noPosts: "No posts found from your friends",
    errorRequest:
      "An error occured while trying to fetch the posts, please refresh the page",
  };
  const [posts, setPosts] = useState(statusMessages.loading);
  const [hashtags, setHashtags] = useState([]);
  const [newPosts, setNewPosts] = useState({
    currentPosts: 0,
    countPosts: 0,
  });
  const { url, config, userImage } = getContext().contextData;
  const { hashtag } = useParams();
  const queryHashtag = hashtag ? `?hashtag=${hashtag}` : "";

  useEffect(() => {
    if (config) {
      getPosts();
      getHashtags();
    }
  }, [getContext().contextData]);

  useInterval(() => {
    getNewPosts(false);
  }, 15000);

  function getPosts() {

    const promisse = axios.get(`${url}/posts${queryHashtag}`, config);
    promisse
      .then((response) => {
        const data = response.data;

        if (data == "-1")
          setPosts(statusMessages.noFollowings);
        else if (data.length === 0) 
          setPosts(statusMessages.noPosts);
        else 
          setPosts(data);
      
        getNewPosts(true);
      })
      .catch((error) => {
        console.log(error.response);
        setPosts(statusMessages.errorRequest);
      });
  }

  function getNewPosts(update) {
    const promisse = axios.get(`${url}/new-posts`);
    promisse
      .then((response) => {
        const count = response.data;
        if (update) {
          setNewPosts({ countPosts: count, currentPosts: count });
        } else {
          setNewPosts({ ...newPosts, countPosts: count });
        }
      })
      .catch((error) => {
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
    <MainContainer>
      <Header />
      <Page>
        <Title>
          <h2>{hashtag ? `# ${hashtag}` : "timeline"}</h2>
        </Title>
        <Content>
          <Posts>
            {hashtag ? (
              <></>
            ) : (
              <CreatePost 
              setPosts={setPosts} 
              image={userImage} 
              getPosts={getPosts}/>
            )}
            <NewPosts getPosts={getPosts} newPosts = {newPosts}/>
            <PostsPage posts={posts} />
          </Posts>
          <Hashtags hashtags={hashtags} />
        </Content>
      </Page>
    </MainContainer>
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

