import React from "react";
import {Container, Carousel} from 'react-bootstrap'
import '../homepagestyle.css'

class ContentPillars extends React.Component{
    render(): JSX.Element{
        return(
            <Container fluid style={{paddingRight:"0", paddingLeft:"0"}} >
                <Carousel indicators={false}>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="mealplan.png"
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Mounir is so fucking hot.</p>
                        </Carousel.Caption> */}
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
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="mindset.jpg"
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Mounir is so fucking hot..</p>
                        </Carousel.Caption> */}
                        <div className="heading">
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
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="training.jpg"
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Mounir is so fucking hot...</p>
                        </Carousel.Caption> */}
                        <div className="heading">
                            {`CUSTOM TRAINING PLANS`}
                        </div>

                        <div className="body">
                            {`Just like nutrition, everybody's body, schedule, and preferences are different, which is why this needs to be customized as well. 
                            We build your foundations from the ground up to ensure you can build a time efficient rhythm with fitness, 
                            while also boosting your metabolism and natural testosterone levels, building muscle, and burning fat, 
                            which will allow you to get results for a lifetime. `}
                        </div>
                    </Carousel.Item>
                </Carousel>

            </Container>
        )
    }
}

export default ContentPillars;