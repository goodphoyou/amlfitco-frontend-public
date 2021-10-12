import React, { useState, useEffect } from "react";
import { useOktaAuth } from '@okta/okta-react';
import {  Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import { UserClaims } from '@okta/okta-auth-js/lib/types/UserClaims'
import './courses.css'

const Courses = (): JSX.Element => {
    const { authState, oktaAuth } = useOktaAuth();
    const [gluteRecruit, setGluteRecruit] = useState(false);
    const [drivenMen, setDrivenMen] = useState(false);

    useEffect(() => {
        if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
            console.log('not logged in')
        } else {
        oktaAuth.getUser().then((info: UserClaims) => {
            //console.log(info)
            setGluteRecruit(info.gluterecruits);
            setDrivenMen(info.drivenmen);
        });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    let gluteRecruitCourseLogo
    if (gluteRecruit){
            gluteRecruitCourseLogo = <Col>
            <Link to={{ 
                pathname: "/gluterecruits"
            }}>
                <img className="courseThumbnail" src="gluterecruits.png" alt="pinkwebsite"/>
            </Link>
        </Col>

    }else{
        gluteRecruitCourseLogo = <Col>
                        <img className="courseThumbnail" src="/nogluterecruits.png" alt="no access to pink courses"/>
                      </Col>
    }

    let drivenMenCourseLogo
    if (drivenMen){
            drivenMenCourseLogo = <Col>
            <Link to={{ 
                pathname: "/drivenmen"
            }}>
                <img className="courseThumbnail" src="drivenmen.png" alt="driven men icon"/>
            </Link>
        </Col>

    }else{
        drivenMenCourseLogo = <Col>
                        <img className="courseThumbnail" src="/nodrivenmen.png" alt="no access to blue courses"/>
                      </Col>
    }
    
    
    return(
        <React.Fragment>
            {/* <ContentNavbar /> */}
            <div className='courseHomeHeader' style={{marginTop:'12vh'}}>SELECT YOUR COURSE</div>
            <Row xs={1} md={2}>

            {gluteRecruitCourseLogo}

            {/* {redpicture} */}

            {drivenMenCourseLogo}

            </Row>
        </React.Fragment>
    )
}


export default Courses