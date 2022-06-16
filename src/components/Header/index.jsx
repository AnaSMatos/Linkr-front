import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
        <h1>linkr</h1>
        <div className="image"></div>
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

  &> .image{
      width: 44px;
      min-height: 44px;
      border-radius:100%;
      background-color: white;
  }
  &>h1{
    font-weight: 700;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;
