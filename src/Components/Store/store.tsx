import React from 'react'
import {Container, Row } from 'react-bootstrap'
import './store.css'


function Store(): JSX.Element{

    return (
      <Container style={{paddingTop: '25vh'}}>
        <Row>
          <a href="https://buy.stripe.com/bIY8zW2RE0iveC43cc" className='title'>$47 Course</a>
        </Row>

        <Row>
          <a href="https://buy.stripe.com/28o6rOboaaX93Xq8wx" className='title'>$2400 Course</a>
        </Row>
        
      </Container>
    );
}

export default Store
