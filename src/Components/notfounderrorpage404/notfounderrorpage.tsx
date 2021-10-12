import React from "react";
import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const NotFoundErrorPage = ():JSX.Element => {
    
    const location = useLocation();

    return(
        <Container fluid style={{paddingTop: '25vh', paddingBottom: '50vh'}}>
            <div className='heading'> This URL does not exist - <code>{location.pathname}</code> </div>
            <a className='heading' href='/home'> Click here to go back to the home page </a>

            <div className='heading'> if you are trying to access course material, make sure you are logged in</div>
            <a className='heading' href='/login'> Click here to Log In </a>


        </Container>
    )
}

export default NotFoundErrorPage