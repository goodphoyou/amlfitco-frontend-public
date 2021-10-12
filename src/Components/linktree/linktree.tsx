import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import "./linktree.css"

const LinkTree = (): JSX.Element => {
    return(
        <Container fluid>
            <Row>
                <Col>
                    <img src="/linktreelogo.png" alt="logo" className="linkTreeLogo"/>
                </Col>
            </Row>

            <Row>
                <Col> 
                    <Button href='https://calendly.com/aml-fit-co-consultations/aml-fit-co-health-and-fitness-consultation?fbclid=IwAR0FGh8gB_6Ba5T7Q9J5w290-pW43Ljv9eU0KeN0UHXsO8NTFc7133WbUsQ&month=2021-09' className="linkTreeMainText linkTreeButton">
                        BOOK 15 MINUTES WITH ME
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col> 
                    <Button href='https://www.facebook.com/groups/280436446153138/' className="linkTreeButton">
                        <div className="linkTreeMainText">
                            {`JOIN MY FACEBOOK GROUP`}
                        </div>

                        <div className="linkTreeSubText">
                            {`Over 30 hours of Content`}
                        </div>
                    </Button>
                </Col>
            </Row>

            
            <Row>
                <Col> 
                    <Button className="linkTreeMainText linkTreeButton">
                        WHAT IS AML FIT?
                    </Button>
                </Col>
            </Row>

            <Row style={{paddingBottom:'15vh'}}>
                <Col> 
                    <Button className="linkTreeMainText linkTreeButton">
                        {`HAVE ACCESS BUT DON'T HAVE FACEBOOK?`}
                    </Button>
                </Col>
            </Row>


        </Container>
    )
}

export default LinkTree