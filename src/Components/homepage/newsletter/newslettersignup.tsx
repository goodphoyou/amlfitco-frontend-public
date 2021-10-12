import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import "./newsletter.css";
import ActiveCampaignForm from './newslettertest'

type Props ={
    colorScheme: string;
  }

const NewsLetterSignup = (props: Props): JSX.Element => {

    return (
        <React.Fragment>
            <Container className={`${props.colorScheme}Background newsletterRectangle`} fluid>
                <Row>
                    <Col>
                        <h1 className="heading">SUBSCRIBE FOR FREE CONTENT</h1>
                    </Col>
                </Row>

                <ActiveCampaignForm/> 

                   
            </Container>
            
           
            
       </React.Fragment>

    )

}

export default NewsLetterSignup;