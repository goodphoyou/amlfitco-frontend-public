import React, { useState, useEffect } from "react";
import { SecureRoute } from '@okta/okta-react';
import ContentPage from './contentpage/index'
import { useOktaAuth } from '@okta/okta-react';
import { Switch, Route } from 'react-router-dom'
import axios from "axios"
import NotFoundErrorPage from "./notfounderrorpage404/index";
import { UserClaims } from '@okta/okta-auth-js/lib/types/UserClaims'

type Subsection = {
    title: string,
    attachmentLink: string,
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

const CourseRouter = (): JSX.Element => {
    const { authState, oktaAuth } = useOktaAuth();
    // const [userInfo, setUserInfo] = useState(defaultUser);
    const [ drivenMen, setdrivenMen ] = useState<Section[]>([]);
    const [ gluteRecruits, setgluteRecruits ] = useState<Section[]>([]);

    useEffect(() => { //this useEffect function checks what the logged in user's type is. grabs user info from oktaAuth.getUser()
        if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info  
            console.log('COURSE ROUTER - user is not logged in')
        } else {
        oktaAuth.getUser().then((info: UserClaims) => {
            //console.log(info)
            if (info.drivenmen){
                axios.post<Section[]>('http://localhost:4000/makeRoutes', { color: 'blue'}).then( (response) => {
                    //response is a response object. response.data should be an array
                    const data = response.data
                    setdrivenMen(data)
                // console.log(drivenMen)
                })
            }  
            if (info.gluterecruits){
                axios.post<Section[]>('http://localhost:4000/makeRoutes', { color: 'pink'}).then( (response) => {
                    //response is a response object. response.data should be an array
                    const data = response.data
                    setgluteRecruits(data)
                })
            }
        });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    // console.log('coursenav', drivenMen)
    let blueroute
    let gluteroute
    
    
    const makeroutes = ( coursetype: string, coursecontent: Section[] ) => {

        const prevRoute = (index: number, subIndex: number, section: Section) => {
            //generates prevRoute for the previous button on course page
            let prevPath
            if ( subIndex === 0){ // subindex 0
                if ( index !== 0){ //subindex 1
                    //checks to make sure we aren't on the first course of the first section
                    const prevIndex = index - 1
                    const prevSection = coursecontent[prevIndex]
                    const prevMaxSubsections = prevSection.subsections.length - 1
                    const prevSubsection = prevSection.subsections[prevMaxSubsections]
                    
                    prevPath = `${prevSection.path.split('.')[1]}/${prevSubsection.subpath.split('_')[1]}`
                }
            }else{
                //if first course of any section that isn't the first section, previous will be the last course of the previous section
                const prevSubIndex = subIndex - 1
                const prevSubsection = section.subsections[prevSubIndex]
                prevPath = `${section.path.split('.')[1]}/${prevSubsection.subpath.split('_')[1]}`
            }
            return prevPath
        }

        const nextRoute = (index: number, subIndex: number, section: Section) =>{
            //generates nextRoute for the next button on course page
            let nextPath
            const maxSections = coursecontent.length
            const currentMaxSubsections = section.subsections.length
            if (subIndex === currentMaxSubsections - 1){
                if (index !== maxSections - 1){
                    //checking to make sure this isn't the last course of the last section
                    const nextIndex = index + 1
                    const nextSection = coursecontent[nextIndex]
                    const nextSubsection = nextSection.subsections[0]
                    if ( nextSubsection !== undefined){
                        nextPath = `${nextSection.path.split('.')[1]}/${nextSubsection.subpath.split('_')[1]}`
                    }
                }
            }else{
                //if the course is the last one of its section, next course will be first course of next section
                const nextSubIndex = subIndex + 1
                const nextSubsection = section.subsections[nextSubIndex]
                nextPath = `${section.path.split('.')[1]}/${nextSubsection.subpath.split('_')[1]}`
            }
            return nextPath
        }

        const returnRoute = coursecontent.map((section: Section, index) =>
            section.subsections.map((i: Subsection, subIndex) =>
                <SecureRoute exact path={`${section.path.split('.')[1]}/${i.subpath.split('_')[1]}`} key={i.title}>
                    <ContentPage data={i} 
                                directory={section.path} 
                                courseColor={coursetype} 
                                prevPath={prevRoute(index,subIndex,section)}
                                nextPath={nextRoute(index,subIndex,section)}
                                navBarSubsections={section.subsections}
                                sectionPath={section.path.split('.')[1]}
                                navTitle={section.id}/>
                </SecureRoute>
            )
        )

        try {
            return (returnRoute)
        } catch (error) {
            console.log(error)
        }
    }
    
    if (drivenMen ){
        if (Array.isArray(drivenMen)){
            blueroute = makeroutes("drivenmen", drivenMen)
        }
    }
    
    if (gluteRecruits){
        if (Array.isArray(gluteRecruits)){
            console.log(gluteRecruits)
            gluteroute = makeroutes("gluterecruits", gluteRecruits)
        }
    }

    // if (loading){
    //     error404 =  <Route path='*' render={() => <div className='heading' style={{marginTop:'25vh', marginBottom:'70vh'}}>Loading...</div>} />
    // }
    
    const error404 = <Route path='*'> <NotFoundErrorPage/> </Route>
    


    return(
        <Switch>
            {blueroute}
            {gluteroute}
            {error404}
        </Switch>
    )

}

export default CourseRouter