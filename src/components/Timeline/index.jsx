import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header";
import MainContainer from "../Layout/MainContainer";
import Post from "../Layout/Post";
import { getContext } from "../../hooks/UserContext";

export default function Timeline() {
  const [posts, setPosts] = useState("Loading");
  const { url, config } = getContext().contextData;

  useEffect(() => {
    const promisse = axios.get(`${url}/posts`, config);
    promisse
      .then((response) => {
        if (response.length === 0) setPosts("There are no posts yet");
        else setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setPosts(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <h2>timeline</h2>
        {typeof posts === "string" ? 
          <h2>{posts}</h2>
         : 
          <>
            {posts.map((post,index) => {
              const {message} = post;
              return <Post key={index} message={message}/>;
            })}
          </>
        }
      </MainContainer>
    </>
  );
}
