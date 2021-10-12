import "./App.css";
import React , {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserClaims, AuthState } from '@okta/okta-auth-js'
import LoginError from './loginError'
import Footer from './footer/index'
import Header from './header/index'
import Courses from './courses/index'
import Store from './Store/index'
import Splashpage from './splashpage/index'
import HomePage from './homepage/index'
import Login from "./login/index"
import FacebookLogin from "./login/facebookLogin"
import CourseRouter from './courserouter'
import CourseHome from "./courses/coursehome";
import Calendly from './schedule/index'
import LinkTree from "./linktree/index";
import LogOut from "./logout/index"
import PrivacyPolicy from "./privacypolicy/index";
import AccountCreator from "./accountcreator/index";

const oktaAuth = new OktaAuth({
    issuer: '',
    clientId: '',
    redirectUri: window.location.origin + '/callback',
    pkce: true
  });
  //this OktaAuth instance is created using the Client and Issuer ID found in okta dev panel. redirectURI refers to where users go after logging in

const App = (): JSX.Element => {
    const [gluteRecruit, setGluteRecruit] = useState(false);
    const [drivenMen, setDrivenMen] = useState(false);
    const [ loggedIn, setLoggedIn ] = useState(false);

    useEffect(() => {
        oktaAuth.isAuthenticated().then( (response: boolean) => {
            setLoggedIn(response)
        })
        if (!loggedIn) {
        // When user isn't authenticated, forget any user info
          setGluteRecruit(false);
          setDrivenMen(false);
        } else {
        console.log('getting user data in app.tsx')
        oktaAuth.getUser().then((info: UserClaims) => {
            //console.log(info)
            setGluteRecruit(info.gluterecruits);
            setDrivenMen(info.drivenmen);
            });
          }
        }, [loggedIn]);
    let colorScheme = 'gold'
    if ( drivenMen && gluteRecruit){
        colorScheme = 'gold'
        console.log('you have access to both classes!')
    } else if (drivenMen && !gluteRecruit){
        colorScheme = 'red'
    } else if (!drivenMen && gluteRecruit){
        colorScheme = 'pink'
    }
    //console.log(colorScheme)

    const history = useHistory()

    const restoreOriginalUri = async (_oktaAuth: AuthState, originalUri: string) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const onAuthRequired = function() {
        history.push('/login')
    }   


    return (
        <div className = "App" style={{ backgroundImage: "url(/background.jpg)" }}>
            
            <Security oktaAuth={oktaAuth}
                restoreOriginalUri={restoreOriginalUri}
                onAuthRequired={onAuthRequired}>

                <Route exact path='/callback'>
                    <LoginCallback loadingElement={<p>Loading...</p>} errorComponent ={LoginError}/>
                </Route>

                <Header/>

                <Switch>

                    <Route exact path="/login">
                        <Login/>
                    </Route>

                    <Route exact path="/">
                        <Splashpage colorScheme={colorScheme}/>
                    </Route>

                    <Route exact path="/logout">
                        <LogOut/>
                    </Route>

                    <Route
                        exact path="/facebooklogin"
                        component={FacebookLogin}
                    />

                    <SecureRoute exact path='/createUser'>
                        <AccountCreator/>
                    </SecureRoute>

                    <Route exact path="/links">
                        <LinkTree/>
                    </Route>

                    <Route exact path="/privacy">
                        <PrivacyPolicy/>
                    </Route>

                    <Route exact path='/schedule'>
                        <Calendly/>
                    </Route>

                    <Route exact path="/courses">
                        <Courses />
                    </Route>

                    <SecureRoute exact path="/gluterecruits">
                        <CourseHome courseType='gluterecruits' />
                    </SecureRoute>

                    <SecureRoute exact path="/drivenmen">
                        <CourseHome courseType='drivenmen' />
                    </SecureRoute>

                    <Route exact path="/home">
                        <HomePage colorScheme={colorScheme}/>
                    </Route>

                    <Route exact path="/store">
                        <Store/>
                    </Route>

                    <CourseRouter/>

                </Switch>

                <Footer colorScheme={colorScheme}/>

            </Security>
        </div>

    );
    
}

export default App;
