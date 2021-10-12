import React from 'react'
import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

//import ContentPage from './contentpage'

type Subsection = {
  title: string;
  subpath: string,
  heading: string;
  videoLink: string;
  content: string;
}


interface Props {
    id: string;
    path: string;
    subsections: Array<Subsection>;
    // Object<Subsection>
  }

const buildDropdownItem = (path: string, subsection: Subsection) => {
  return(
    <Dropdown.Item key={subsection.title} eventkey={subsection.title}>
        <Link id={`${subsection}`} to={{ pathname: `${path.split('.')[1]}/${subsection.subpath.split('_')[1]}` }}> {subsection.title} </Link>
    </Dropdown.Item>
  )
}

const ContentNavButton = ({ id, path, subsections } : Props): JSX.Element => {
  // console.log(id, path, type, subsections)
  return (

      <Col>
        <DropdownButton
            as={ButtonGroup}
            key='right'
            id={'dropdown-button-drop-right'}
            drop='right'
            variant="secondary"
            title={id}
        >

        <div className="mb-2 text-black">
            {
              subsections.map((key: Subsection) => 
                buildDropdownItem(path, key)
              )
            }
        </div>

        </DropdownButton>
        
      </Col>
  )
}

export default ContentNavButton
