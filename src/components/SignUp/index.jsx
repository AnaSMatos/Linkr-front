import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import RenderButton from "./../Layout/RenderButton.jsx";
import * as S from "./styled.js";

import { UserDataContexts } from "../../hooks/AuthContext.js";

import { getItem, deleteItem } from "./../../utils/localStorage.js";

export default function SignUp() {
  const { signUp, setSignUp, postSignUp } = useContext(UserDataContexts);
  const { username, email, password, image } = signUp;
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("user")?.token;

    if (token) {
      (async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          await axios.get(`${process.env.REACT_APP_URL}/posts`, config);
          navigate("/timeline");
        } catch (error) {
          const messages = [
            "You must be logged in to do this.",
            "Invalid token.",
            "Session not found",
          ];
          const messageReceived = error.response.data.message;

          if (messages.includes(messageReceived)) {
            deleteItem("user");
          }
        }
      })();
    }
  }, []);

  function OnSubmit(e) {
    setDisabled(true);
    postSignUp(e, signUp)
      .then(() => {
        setSignUp({
          username: "",
          email: "",
          password: "",
          image: "",
        });
        navigate("/");
      })
      .catch((e) => {
        setDisabled(false);
        window.alert(e.response.data.message);
      });
  }

  return (
    <S.Container>
      <S.Header>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </S.Header>
      <S.Form onSubmit={OnSubmit}>
        <S.Input
          disabled={disabled ? "disabled" : ""}
          type="email"
          value={email}
          placeholder="e-mail"
          autocomplete="on"
          required
          onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
        />
        <S.Input
          disabled={disabled ? "disabled" : ""}
          type="password"
          value={password}
          placeholder="password"
          autocomplete="on"
          required
          onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
        />
        <S.Input
          disabled={disabled ? "disabled" : ""}
          type="text"
          value={username}
          minLength={3}
          placeholder="username"
          required
          onChange={(e) => setSignUp({ ...signUp, username: e.target.value })}
        />
        <S.Input
          disabled={disabled ? "disabled" : ""}
          type="text"
          value={image}
          placeholder="picture url"
          required
          onChange={(e) => setSignUp({ ...signUp, image: e.target.value })}
        />
        <S.Button disabled={disabled ? "disabled" : ""} type="submit">
          <RenderButton state={disabled} text="Sign Up" />
        </S.Button>
        <Link to="/">
          <S.GoTo>Switch back to log in</S.GoTo>
        </Link>
      </S.Form>
    </S.Container>
  );
}
