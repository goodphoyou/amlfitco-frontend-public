import React, { useState, useEffect } from "react"
import axios from "axios"
import {Row, Col, Carousel} from 'react-bootstrap'
import LoadingSpinner from '../../loadingspinner/index'
import "./testimonials.css";

type Testimonial = { 
    text: string;
    photoLink: string;
}

const Testimonials = (): JSX.Element => {
    const [testimonials, setTestimonials] = useState<Array<Testimonial>>([]);
    const [loading, setLoading] = useState(true);
    // const [ testimonialMediaLinks, settestimonialMediaLinks] = useState<Array<string>>([]);

    useEffect( ()=>{
            setLoading(true)
            axios.get('http://localhost:4000/testimonials').then( (response)=>{
                setLoading(false)
                const data = response.data
                setTestimonials(data)
        }).catch( error => {
            console.log(error)
        })

    }, [])
    
    const createTestimonialBlocks = (testimonialArray: Array<Testimonial>) => {
        const testimonialJSX = testimonialArray.map( (testimonial: Testimonial, index: number) =>
            <Col md={4} xs={12} className="d-none d-lg-block body" key={index}>
                <img src={`${testimonial.photoLink}`} className='testimonialImage' alt='image'/>
                {testimonial.text}
            </Col>
        )
        return testimonialJSX
    }

    const createTestimonialCarousel = (testimonialArray: Array<Testimonial>) => {
        const testimonialCarouselItems = testimonialArray.map( (testimonial: Testimonial, index: number) =>
            <Carousel.Item key={index}>
                <img src={`${testimonial.photoLink}`} className='testimonialCarouselImage' alt='image'/>
                <div>
                    {testimonial.text}
                </div>
            </Carousel.Item> 
        )
        
        return(
            <Carousel className="d-lg-none" indicators={false}>
                {testimonialCarouselItems}
            </Carousel>
        )
    }

    const testimonialsJSX = createTestimonialBlocks(testimonials)
    const testimonialsCarousel = createTestimonialCarousel(testimonials)

    return(
        <Row style={{marginBottom:'20vh'}}>

            {loading ? <div className="d-none d-lg-block body"><LoadingSpinner/></div> : testimonialsJSX}
            {loading ? <div className="d-lg-none"><LoadingSpinner/></div> : testimonialsCarousel}

        </Row>
    )
}

export default Testimonials