import React from "react";
import { ResponsiveEmbed, Container, Row, Col, Button } from 'react-bootstrap'
import './splashpage.css'

type Props = {
    colorScheme: string;
}

const Splashpage = (props: Props): JSX.Element => {

    const colorScheme = props.colorScheme

    return(
        <Container fluid className='splashContainer' style={{padding:"0",top:"0"}} >
            <Row xl={3}>
                <Col xl={{ span: 4, offset: 4 }}>
                    <img src='linktreelogo.png'></img>

                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe src="https://player.vimeo.com/video/575674338?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0" 
                                allow="autoplay; fullscreen" 
                                />     
                    </ResponsiveEmbed>
                    <script src="https://player.vimeo.com/api/player.js"></script>

                    <div className='splashText'> ARE YOU READY FOR THE NEXT LEVEL? </div>

                    <Button href="/home"className={`${colorScheme}Background enterButton`}>ENTER NOW</Button>
                </Col>

                <Col >
                    <img className='splashPhoto' src='splashphoto.jpg' alt='arms crossed mounir'></img>
                </Col>
            </Row>


        </Container>
    )
}

export default Splashpage

