import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import ContentPillars from './contentPillars/index'
import NewsLetterSignup from './newsletter/index'
// import Blog from '../blog/blogapp'
import './homepagestyle.css'
import Testimonials from './testimonials/index'
import InstagramSlider from './instagram/index'

type Props ={
  colorScheme: string;
}

const HomePage = (props: Props): JSX.Element => {

  return (
    <React.Fragment>

      {/* <Container fluid style={{paddingRight:"0", paddingLeft:"0"}}>
        <Videobackground/>
      </Container> */}

      <Container fluid>
        <Row>
          <Col style={{paddingLeft:'0', paddingRight:'0'}}>
            <img
              className="mainPhoto"
              src="homepagemain.jpg"
              alt="First slide"
              style={{width:"100%"}}
            />
            <div className="photoText photoText1" > This isn’t just about getting fit and healthy, this is about the mindset you develop inside of the process </div>
            <div className="photoText photoText2" >And how that impacts every other area of your life - Business, Family, Leadership, Personal fulfillment</div>
            <div className="photoText photoText3" >If you want to get clear on exactly what you need to to do get the results you want, and how we can help you, book a coaching call here, the first one is on us:</div>
    
          </Col>
        </Row>

        <Row>

          <Col>
            <div className="title">
              {`The Key to Getting In Shape & Keeping it for life is…`}
            </div>
          </Col>
        </Row>


        <Row >
          <Col md={6} sm={12}>
            <div className="body">
              Taking a data driven approach to boosting your metabolism, optimizing your hormones, and setting up your nutrition to fit your lifestyle, preferences, and genetics.
              Combine that with a training protocol that further sharpens your mind and speeds up your metabolism
              And a mindset that will allow you to produce results across all walks of life
              And your ability to handle any of life’s pressures, stressors, and challenges dramatically scales up
            </div>
          </Col>

          <Col md={6} sm={12}>
            <img src="mainpic1.jpg" style={{width:"100%", height:"100%"}} alt="punching bag"> 
            </img>
          </Col>
        </Row>


        <Row style={{paddingTop:"3vh"}}>
          <Col md={6} sm={12}>
            <div className="body">
              We have a 90 day and 16 week system to boosting your metabolism, setting up your nutrition to allow you to get in shape without food restrictions, and then setting you up to truly be able to stay in shape for the rest of your life, eating and training however you want…
              But don’t just take our word for it
              Read through the testimonials below
              And tap here if you’d like to see a video on how the entire system works
            </div>
          </Col>

          <Col md={6} sm={12}>
            <img src="mainpic2.jpg" style={{width:"100%", height:"100%"}} alt="mealplan"> 
            </img>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="title">
              WHAT I PROVIDE
            </div>
          </Col>
        </Row>

        <Row  >

          <Col className="d-lg-none">
            <ContentPillars/>
          </Col>
          

          <Col md={4} xs={12} className="d-none d-lg-block">
            <img src="mealplan.png" alt="nutrition" style={{width:"100%"}}/>

            <div className="heading">
              Nutrition
            </div>

            <div className="body">
              {`Everybody's body is different.
              We all have different lifestyles, schedules, and genetics, not to mention our goals and preferences, 
              so it's key that we put together a custom nutrition plan that evolves WITH your goals instead of a cookie cutter plan, 
              or a plan expected to cover you for the rest of your life... rather while you work with us we customize your nutrition, 
              while teaching you the scientific principles of nutrition so you can customize your own diet for life after working with us. 
              Our goal is to increase your metabolism using nutrition so it's easy to get and keep your results, 
              while also fitting in your favorite foods, both of which are an art and science we will teach you throughout your process working with us.`} 
            </div>

          </Col>

          <Col md={4} xs={12} className="d-none d-lg-block">

          <img src="mindset.jpg" alt="mindset" style={{width:"100%"}}/>

            <div className="heading" style={{fontSize:"1.8vw"}}>
              {`MINDSET COACHING & ACCOUNTABILITY`}
            </div>

            <div className="body">
              {`We could give you the perfect nutrition and training plan but if you don't follow it you won't get results. 
              Furthermore, if all you get is a physical transformation but your mindset and life dont' change as well, 
              then we've failed. We hold ourselves to a high standard and we will hold you to a high standard as well. 
              Our coaches follow up with you daily to ensure you always have support, and that if you miss a workout somebody will hold you 
              accountable and help you problem solve. We also dive deep into mindset to ensure you get a multiple ROI on your training here and 
              are able to keep yourself motivated for the rest of your life. `}
            </div>
          </Col>

          <Col md={4} xs={12} className="d-none d-lg-block">

          <img src="training.jpg" alt="mindset" style={{width:"100%"}}/>

            <div className="heading" style={{fontSize:"2vw", paddingBottom:"1.8vw"}}>
              {`CUSTOM TRAINING PLANS`}
            </div>

            <div className="body">
              {`Just like nutrition, everybody's body, schedule, and preferences are different, which is why this needs to be customized as well. 
              We build your foundations from the ground up to ensure you can build a time efficient rhythm with fitness, 
              while also boosting your metabolism and natural testosterone levels, building muscle, and burning fat, 
              which will allow you to get results for a lifetime. `}
            </div>
          </Col>

        </Row>

        <Row>
          <NewsLetterSignup colorScheme={props.colorScheme}/>
        </Row>

        <Row>
          <Col>
            <div className="title">
              Testimonials
            </div>
          </Col>
        </Row>

        <Testimonials/>

        <Row>
          <Col>
            <div className="title">
              Social Media Feed
            </div>
          </Col>
        </Row>

        <InstagramSlider/>
        {/* we will want to probably dynamically generate testimonials to do the reverse left/right shit */}

        

      <Button className={`${props.colorScheme}Background heading`} style={{marginTop:'20vh'}} href="/schedule"> 
        SCHEDULE NOW
      </Button>


      </Container>


    </React.Fragment>
  )
}

export default HomePage
