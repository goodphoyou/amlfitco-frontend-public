import React from 'react'
import {Container} from 'react-bootstrap'
import './calendly.css'

const Calendly = (): JSX.Element => {

    return(
        <Container fluid className='calendly'>
            <iframe
                src="https://calendly.com/mounir-lazzouni"
                frameBorder="0"
                className='calendlyEmbed'
            />
        </Container>
    )
}

export default Calendly