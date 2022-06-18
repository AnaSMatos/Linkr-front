import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getContext } from "../../hooks/UserContext";

import { getItem, deleteItem } from "./../../utils/localStorage.js";

import Menu from "./../Menu";
import MenuItem from "./../MenuItem";

export default function Header() {
  const { userImage } = getContext().contextData;
  const navigate = useNavigate();
  const userInfo = getItem("user");

  const handleLogout = async () => {
    if (userInfo) {
      const { sessionId, userId, token } = userInfo;

      try {
        await axios.post(
          `${process.env.REACT_APP_URL}/logout`,
          {
            sessionId,
            userId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        deleteItem("user");
        navigate("/");
      } catch (error) {
        console.log(error);
        window.alert("Ocorreu um erro ao tentar fazer logout, tente novamente");
      }
    }
  };

  return (
    <HeaderContainer>
      <h1>linkr</h1>

      <Menu src={userImage} alt="Fulaninho">
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 0 17px;

  & > img {
    width: var(--header-size-image);
    height: var(--header-size-image);
    border-radius: 100%;
  }
  & > h1 {
    font-family: var(--font-family-h1);
    font-weight: var(--font-bold);
    font-size: var(--header-font-size);
    line-height: 50px;
    letter-spacing: 0.05em;
    color: var(--color-white);
  }
`;
