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

export default function UserPage() {
    const { id } = useParams();
    const statusMessages = {
        loading: "Loading",
        emptArray: "There are no posts yet",
        errorRequest:
        "An error occured while trying to fetch the posts, please refresh the page",
    };
    const usersMessages = {
        loading: "Loading",
        emptArray: "There are no users with this id",
        errorRequest:
        "An error occured while trying to fetch the user, please refresh the page",
    };
    const [posts, setPosts] = useState(statusMessages.loading);
    const [user, setUser] = useState(usersMessages.loading);
    const [hashtags, setHashtags] = useState([]);
    const { url, config, userImage } = getContext().contextData;
    const { hashtag } = useParams();
    const queryHashtag = hashtag?`?hashtag=${hashtag}`:"";

    useEffect(() => {
        if (config) {
            getPosts();
            getHashtags();
            getUser();
        }
    }, [getContext().contextData]);

    function getPosts() {
        console.log("Entrei em getPosts")
        const promisse = axios.get(`${url}/posts/${id}`, config);
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

    function getUser() {
        console.log("Entrei em getUser")
        const promisse = axios.get(`${url}/user/${id}`, config);
        promisse
        .then((response) => {
            const data = response.data;
            if (data.length === 0) setUser(usersMessages.emptArray);
            else setUser(data);
        })
        .catch((error) => {
            console.log(error.response);
            setUser(usersMessages.errorRequest);
        });
        console.log("USER: ")
        console.log(user[0].username);
    }

    return (
        <MainContainer>
        <Header />
        <Page>
            <Title>
            <h2>{hashtag ? `# ${hashtag}`: `${user[0].username}'s posts`}</h2>
            </Title>
            <Content>
            <Posts>
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