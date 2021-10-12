import React, { useState, useEffect } from "react";
import ContentNavButton from './contentnavbutton'
import { Container, Row } from 'react-bootstrap'
import axios from "axios"

type Props = {
  type: string
}

type Subsection = {
  title: string;
  subpath: string,
  heading: string;
  videoLink: string;
  content: string;
}

interface Section {
  id: string;
  path: string;
  subsections: Array<Subsection>
}

const ContentNavbar = (props: Props): JSX.Element => {
    const [ course, setCourse ] = useState<Section[]>([]);
    const type = props.type

    const makeNav = (content: Section[]) => {
      console.log('makeNav', content)
      return (
        <Container style={{paddingTop: "10rem"}}>
          {content.map( (section: Section) =>
            <Row key={section.id}>
              <ContentNavButton 
              id={section.id} 
              path={section.path}
              subsections = {section.subsections}
              />
            </Row>
          )}
        </Container>
      )
    }

    useEffect(() => {
      if (type.includes('driven') || type.includes('blue')){
        axios.post<Section[]>('http://localhost:4000/makeRoutes', { color: 'blue'}).then( (response) => {
          //response is a response object. response.data should be an array
          const data = response.data
          console.log(data)
          setCourse(data)
          console.log(course)
        })
      }
      if (type.includes('glute') || type.includes('pink')){
        axios.post<Section[]>('http://localhost:4000/makeRoutes', { color: 'pink'}).then( (response) => {
          //response is a response object. response.data should be an array
          const data = response.data
          console.log(data)
          setCourse(data)
          console.log(course)
        })
      }
    }, [])

    const navJSX = makeNav(course)
    
    return (
        <React.Fragment>
          {navJSX}
        </React.Fragment>
    )
  }

export default ContentNavbar
