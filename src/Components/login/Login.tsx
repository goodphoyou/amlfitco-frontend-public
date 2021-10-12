import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { AuthTransaction } from '@okta/okta-auth-js'
import { Button, Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

const Login = (): JSX.Element | null => {
  // console.log("login rendered")
  const { oktaAuth, authState } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    console.log("Login HandleSubmit")
    e.preventDefault();

    oktaAuth.signInWithCredentials({ username, password })
    .then((res: AuthTransaction) => {
      console.log(res)
      const sessionToken = res.sessionToken;
      if (sessionToken !== undefined){
        setSessionToken(sessionToken);
      }
      // sessionToken is a one-use token, so make sure this is only called once
      oktaAuth.signInWithRedirect({ sessionToken });
    })
    .catch((err: Error) => console.log('Found a Login error', err));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    console.log("session token check ")
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/home' }}/> :
    <Container style={{paddingTop:'30vh', paddingBottom:'10vh'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            id="username" type="text"
            value={username}
            onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            id="password" type="password"
            value={password}
            onChange={handlePasswordChange} />
        </label>
        <input id="submit" type="submit" value="Submit" />

        <h1> OR USE FACEBOOK </h1>
        <Button href={`https://dev-33221396.okta.com/oauth2/v1/authorize?idp=0oa12b55iwkouIyed5d7&client_id=0oabx244wGEQjso2q5d6&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=${window.location.origin}/facebooklogin&state=LuV69&nonce=s1xTYn1n3`}>Facebook</Button>

      </form>
    </Container>
  ;
};
export default Login;