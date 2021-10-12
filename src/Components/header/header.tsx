import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {  Navbar, Container, Row, Nav, Image } from 'react-bootstrap'
import "./headerstuff.css";
import { useOktaAuth } from '@okta/okta-react';
import { UserClaims } from '@okta/okta-auth-js/lib/types/UserClaims'



const Header = ():JSX.Element => {

    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    const [gluteRecruit, setGluteRecruit] = useState(false);
    const [drivenMen, setDrivenMen] = useState(false);

    useEffect(() => {
        if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
            setGluteRecruit(false);
            setDrivenMen(false);
        } else {
        oktaAuth.getUser().then((info: UserClaims) => {
            //console.log(info)
            setGluteRecruit(info.gluterecruits);
            setDrivenMen(info.drivenmen);
        });
        }
    }, [authState, oktaAuth]);
    let colorScheme = 'gold'
    if ( drivenMen && gluteRecruit){
        colorScheme = 'gold'
    } else if (drivenMen && !gluteRecruit){
        colorScheme = 'red'
    } else if (!drivenMen && gluteRecruit){
        colorScheme = 'pink'
    }

    const logout = async () => { await oktaAuth.signOut(); }
    
    //if(authState.isPending) {
    //     return <div>Loading...</div>;
    // }
    const userText = authState.isAuthenticated
        ? <Nav.Link className={`${colorScheme}Text navbutton`} href="/logout" onClick={ logout }>SIGN OUT</Nav.Link>
        : <Nav.Link className={`${colorScheme}Text navbutton`} href="/login/" onClick={() => {history.push('/login')}}>SIGN IN</Nav.Link>;


        return (
            <header > 
                <Container fluid className="ml-auto mr-auto pl-15 pr-15 " > 
                    <Row>
                        <Navbar className='navbar' 
                            style={{marginBottom: "0vw", backgroundImage: "url(/background.jpg)"}} fixed="top" collapseOnSelect expand="lg">

                            <Navbar.Brand href="/home">
                                <Image src='/amlfitcologo.png' thumbnail style={{maxWidth: "134px", maxHeight: "107px"}} alt="AML Logo"/>
                            </Navbar.Brand>

                            <Navbar.Toggle> <img src="hamburger_menu.png"/></Navbar.Toggle>

                            <Navbar.Collapse id="responsive-navbar-nav">
                            
                            <Nav className='mr-auto'>
                                <Nav.Link className={`${colorScheme}Text navbutton`} href="/home"> HOME </Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link className={`${colorScheme}Text navbutton`}  href="/courses">COURSES</Nav.Link>
                                {userText}
                                <Nav.Link className={`${colorScheme}Text navbutton`}  href="https://www.facebook.com/groups/280436446153138/">SUPPORT</Nav.Link>

                                {/* <Col lg={{ span: 2, offset: 2 }}>
                                    <Nav.Link className={`${colorScheme}Text navbutton`} href="/home"> HOME </Nav.Link>
                                </Col>

                                <Col lg={{ span: 2, offset: 6 }} >
                                    <Nav.Link className={`${colorScheme}Text navbutton`}  href="/courses">COURSES</Nav.Link>
                                </Col>
                                
                                <Col lg={{ span: 4, offset: 1 }} >
                                    {userText}
                                </Col>

                                <Col lg={{ span: 2 }} >
                                    <Nav.Link className={`${colorScheme}Text navbutton`}  href="https://www.facebook.com/groups/280436446153138/">SUPPORT</Nav.Link>
                                </Col> */}
                            </Nav>
                            
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
                

            </header>

            )
        
}
export default Header
