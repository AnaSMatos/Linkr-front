import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #333333;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 375px;
  height: 175px;
  background: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  text-align: center;

  & > h1 {
    margin: 10px auto 0px;
    font-family: "Passion One";
    font-size: 76px;
    line-height: 84px;
    letter-spacing: 0.05em;
  }

  & > h2 {
    margin: 0px auto;
    width: 237px;
    height: 68px;
    font-family: "Oswald";
    font-size: 23px;
    line-height: 34px;
  }

  @media (min-width: 1024px) {
    width: 60vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h1 {
      margin-left: 144px;
      font-size: 106px;
      line-height: 117px;
    }

    & > h2 {
      margin-left: 144px;
      width: 442px;
      font-size: 43px;
      line-height: 60px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    margin-left: 60vw;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Input = styled.input`
  width: 330px;
  height: 55px;
  padding: 15px;
  margin-bottom: 11px;

  background: #ffffff;
  border-radius: 6px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #9f9f9f;

  &:disabled {
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    width: 429px;
    height: 65px;
    font-size: 27px;
    line-height: 40px;
  }
`;

export const Button = styled.button`
  width: 330px;
  height: 55px;

  background: #1877f2;
  border-radius: 6px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 429px;
    height: 65px;
    font-size: 27px;
    line-height: 40px;
  }
`;

export const GoTo = styled.p`
  height: 20px;

  margin: 18px auto 0px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;

  color: #ffffff;

  @media (min-width: 1024px) {
    margin-top: 22px;
    font-size: 24px;
  }
`;
