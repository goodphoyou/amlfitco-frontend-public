import React from "react";
import ContentNavbar from './contentnav/index'
import {Container} from 'react-bootstrap'
import './coursehome.css'

type Props = {
    courseType: string
  }

const CourseHome = (props: Props): JSX.Element => {
    const courseType = props.courseType
    let courseColor = 'bluecourse'
    let courseTitle
    if (courseType === 'drivenmen'){
        courseColor = 'bluecourse'
        courseTitle = 'Driven Men 2.0 Program'
    } else if (courseType === 'gluterecruits'){
        courseColor = 'pinkcourse'
        courseTitle = 'Glute Recruits'
    }
    console.log('courseColor', courseColor)
    return(
        <Container fluid>
            <div className='courseHomeHeader'>Welcome to the {courseTitle}</div>
            <img className='courseHomeThumbnail' src={`${courseType}.png`} alt={`${courseType} logo`}/>
            <ContentNavbar type={courseColor}/>
        </Container>
    )
}

export default CourseHome