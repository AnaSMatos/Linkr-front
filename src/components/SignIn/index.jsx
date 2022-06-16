import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import styled from 'styled-components';

export default function Register() {
    const signUp = [];
    const { name, email, password, image } = signUp;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    return (
        <Container>
            <Header>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </Header>
            <Form>
                <Input
                    disabled = {disabled}
                    type = "email"
                    value = {email}
                    placeholder = "e-mail"
                    required
                />
                <Input
                    disabled = {disabled}
                    type = "password"
                    value = {password}
                    placeholder = "password"
                    autocomplete="on"
                    required
                />
                <Button disabled={disabled} type="submit">
                    Sign In
                </Button>
                <Link to = "/sign-up">
                    <GoTo>First time? Create an account!</GoTo>
                </Link>
            </Form >
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #333333;
`

const Header = styled.div`
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
  color: #FFFFFF;
  text-align: center;

  &>h1{
    margin: 10px auto 0px;
    font-family: 'Passion One';
    font-size: 76px;
    line-height: 84px;
    letter-spacing: 0.05em;
  }

  &>h2{
    margin: 0px auto;
    width: 237px;
    font-family: 'Oswald';
    font-size: 23px;
    line-height: 2px;
  }
`
const Form = styled.form`
    width: 100%;
    margin-top: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width: 330px;
    height: 55px;
    padding: 15px;
    margin-bottom: 11px;

    background: #FFFFFF;
    border-radius: 6px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #9F9F9F;

`
const Button = styled.button`
    width: 330px;
    height: 55px;

    background: #1877F2;
    border-radius: 6px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #FFFFFF;

    &:disabled {
    opacity: 0.7;
  }
`
const GoTo = styled.p`
    height: 20px;

    margin: 18px auto 0px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-decoration-line: underline;

    color: #FFFFFF;
`