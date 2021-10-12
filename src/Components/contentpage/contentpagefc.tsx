import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./contentpagestyle.css"

type MyProps = {
    data:{
        title: string,
        attachmentLink: string,
        subpath: string,
        heading: string,
        videoLink: string,
        content: string,
    },
    directory: string, // can remove
    courseColor: string,
    prevPath?: string | undefined,
    nextPath?: string | undefined,
    navBarSubsections: Array<Subsection>,
    navTitle: string,
    sectionPath: string

}

type Subsection = {
    title: string;
    subpath: string,
    heading: string;
    videoLink: string;
    content: string;
}


const ContentPage = (props: MyProps): JSX.Element => {
    let csscolor = ''
    if (props.courseColor === 'drivenmen'){
        csscolor = 'red'
    }
    if (props.courseColor === 'gluterecruits'){
        csscolor = 'pink'
    }

    const makeNavBar = () =>{
        const courseNavButtons = 
            props.navBarSubsections.map((s: Subsection, index) => {
                return(
                    <Button key={index} className='silverBackground'>
                        {/* {console.log(`${props.sectionPath}/${s.subpath.split('_')[1]}`)} */}
                        <Link className="courseNavLink" to={{pathname: `${props.sectionPath}/${s.subpath.split('_')[1]}`}}>
                            {s.title}
                        </Link>
                    </Button>
                )
                }
            )
        
        return (
            <ButtonGroup vertical>
                <h1>{props.navTitle}</h1>
                {courseNavButtons}
            </ButtonGroup>
        )
    }
    const courseNavBar = makeNavBar()
    console.log('content page rendered')
    let attachmentButton
    if (props.data.attachmentLink !== ''){
        attachmentButton =  
        <Col>
            <Button style={{marginTop:'5vh', marginBottom:'5vh'}} href={props.data.attachmentLink} className={`${csscolor}Background`} size="lg" block>
                Click Here for Attachment
            </Button>
        </Col>
    }
        
    


      return (
            <div className="contentbody">

                {/* heading */}

                <div className={`${csscolor}Text title`}>{props.data.heading}</div>

                {/* video link */}
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="allowfullscreen embed-responsive-item" src={props.data.videoLink}></iframe>
                </div>

                <Row>

                    <Col>
                        <Button className="prevButton" size="lg" block>
                            <Link className="directionalLink" to={{pathname: props.prevPath}}>
                                Previous Course 
                            </Link>
                        </Button>
                    </Col>

                    <Col>
                        <Button className={`${csscolor}Background`} size="lg" block>
                            <Link className="directionalLink" to={{pathname: props.nextPath}}>
                                Next Course 
                            </Link>
                        </Button>
                    </Col>
                    
                </Row>

                {/* MD file */}
                <div className="bulletList text-left" >
                    <ReactMarkdown source={props.data.content} />
                </div>

                {attachmentButton}

                {courseNavBar}

                


            </div>
      )
    
}

export default ContentPage
