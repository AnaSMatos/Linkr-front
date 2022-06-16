import styled from "styled-components";
import { getContext } from "../../hooks/UserContext";

export default function Header() {
  const {userImage} = getContext().contextData;
  return (
    <HeaderContainer>
        <h1>linkr</h1>
        <img src={userImage} alt="" />
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

  &> img{
      width: 44px;
      height: 44px;
      border-radius:100%;
  }
  &>h1{
    font-family: "Passion One";
    font-weight: 700;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;
