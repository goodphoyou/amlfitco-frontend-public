import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Row } from 'react-bootstrap'
import "./aboutpagestyle.css"

const About = (): JSX.Element => {

    const [aboutMD, setContent] = useState('temp');

    useEffect( ()=> {
        
        fetch('/about.md').then(res => res.text()).then(text => setContent(text))
    }, [aboutMD] );

    return (

          <div className="aboutbody justify-content-md-center">

            {/* ABOUT */}
            <Row>
              <Col style={{paddingTop: "5vh"}} id="about ">
                <ReactMarkdown source={aboutMD}  />
              </Col>
            </Row>

          </div>
    )
  
}

export default About