import React from 'react';
import { Link } from "react-router-dom";

import {
  LoginContainer,
  LoginCard,
  UserInput,
  PassInput,
  LinkDiv,
  LoginButton,
} from "./styles";


const Login = () => {
  return (
    <>

      <LoginContainer>
        <LoginCard>
          <div>
            LOGIN
          </div>
          <div>

          </div>
          <UserInput type="text" placeholder="Username" />
          <PassInput type="password" placeholder="Password" />
          <LinkDiv>
            <Link to="/">HOME</Link>
            <LoginButton>LOGIN</LoginButton>
          </LinkDiv>
        </LoginCard>
      </LoginContainer>
    </>
  );
}

export default Login;
