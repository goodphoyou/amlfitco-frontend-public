import React from "react";
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginError = (): JSX.Element => {
    return(
        <Container fluid>
            <Row>
                <h1>LOGIN FAILURE, YOUR FACEBOOK LOGIN EMAIL IS NOT REGISTERED TO AN AML FIT CO EMAIL.</h1>
                <Button>
                    <Link to={"/home"}>
                        Home
                    </Link>
                </Button>
            </Row>
        </Container>
    )
}

export default LoginError