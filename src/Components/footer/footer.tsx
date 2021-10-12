import React from "react";
import {  Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'

type Props ={
  colorScheme: string;
}

const Footer = (props: Props): JSX.Element => {
    const colorScheme = props.colorScheme
    return (
          <Container className={`${colorScheme}Background footer`} style={{marginTop: "5vw"}} fluid>
            <Row md={4}>
              <Col md={3}>
                <img src={'/amlfitcologo.png'} alt="logo"/>
              </Col>

              <Col md={3}>
                <div className='footerbar'>

                  <Link to='/home' className="footerlinks">
                    Home
                  </Link>
                  <br/>

                  <Link to='/links' className="footerlinks">
                    About
                  </Link>
                  <br/>

                  <Link to='/links' className="footerlinks">
                    Contact
                  </Link>
                  <br/>

                  <Link to='/login' className="footerlinks">
                    Members
                  </Link>
                  <br/>

                  <Link to='/privacy' className="footerlinks">
                    Privacy Policy
                  </Link>

                </div>
              </Col>

              <Col md={6}>
                <Row>
                  <div className={`${colorScheme}Background footer iconHeader`}>
                    FOLLOW MY SOCIALS
                  </div>
                </Row>

                <Row md={3}>
                  <Col>
                    <a href='https://www.facebook.com/groups/280436446153138/'>
                      <img src='/fb_amlfit.png' className='socialIcon' alt='facebook'/>
                    </a>
                  </Col>

                  <Col>
                    <a href='https://www.instagram.com/moumoumuscle/'>
                      <img src='/ig_amlfit.png' className='socialIcon' alt='instagram'/>
                    </a>
                  </Col>

                  <Col>
                    <a href='https://www.youtube.com/user/amounirl'>
                      <img src='/yt_amlfit.png' className='socialIcon' alt='youtube'/>
                    </a>
                  </Col>
                </Row>
                
              </Col>

            </Row>
          </Container>
  )
}

export default Footer
