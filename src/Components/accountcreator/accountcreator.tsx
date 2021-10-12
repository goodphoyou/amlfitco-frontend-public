import React, { useEffect, useState } from 'react'
import { useOktaAuth } from '@okta/okta-react';
import axios from "axios"
import { Form, Field } from 'react-final-form'
import { UserClaims } from '@okta/okta-auth-js/lib/types/UserClaims'

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    login: string,
    password: string,
    courses: Array<string>
}

type Profile = {
    firstName: string,
    lastName: string,
    email: string,
    login: string,
    mobilePhone: string
    
}
type User = {
    profile: Profile,
    credentials: { password: { value: string }},
    groupIds: Array<string> | Array<null>
}

const AccountCreator = (): JSX.Element => {
    const { authState, oktaAuth } = useOktaAuth();
    const [ admin, setAdmin ] = useState(false)
    let loadingMessage = 'loading, please wait'

    useEffect(() => { //this useEffect function checks what the logged in user's type is. grabs user info from oktaAuth.getUser()
        if (!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info 
            loadingMessage = 'you do not have permission to access this section'
            console.log('COURSE ROUTER - user is not logged in')
        } else {
        oktaAuth.getUser().then((info: UserClaims) => {
                setAdmin(info.admin)
                if (!admin){
                    loadingMessage = 'you do not have permission to access this section'
                }
            }
        )}
    },[])

    const onSubmit = async (values: FormValues) => {

        const defaultUser = {
            "profile": {
                "firstName": values.firstName,
                "lastName": values.lastName,
                "email": values.email,
                "login": values.email,
                "mobilePhone": ""
              },
              "credentials": {
                "password" : { "value": values.password }
              }
              , "groupIds": values.courses
        }
        createUser(defaultUser, values.courses)
    }

    const createUser = (user: User, groupID: Array<string>) => {
        axios.post('http://localhost:4000/createUser', {user: user, groupID: groupID }).then(response => {
            alert(response.config.data)
        })
    }

    return (
        <React.Fragment>
            { admin ?
             <div style={{paddingTop:'20vh',paddingBottom:'20vh'}} className=''>
                <div className='title'>User Creation</div>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                        </div>
                        <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                        </div>

                        <div>
                        <label>Email</label>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="email"
                        />
                        </div>

                        <div>
                        <label>Login</label>
                        <Field
                            name="login"
                            component="input"
                            type="text"
                            placeholder="login"
                        />
                        </div>

                        <div>
                        <label>Password</label>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="Password"
                        />
                        </div>

                        <div>
                        password: Password requirements: at least 8 characters, no parts of your username. Your password cannot be any of your last 4 passwords.
                        </div>

                        <div>
                        <label>Sex</label>
                        <Field
                            name="sex"
                            component="input"
                            type="text"
                            placeholder="sex"
                        />
                        </div>

                        <div>
                        <label>Courses</label>
                        <div className='label'>
                            <label>
                            <Field
                                name="courses"
                                component="input"
                                type="checkbox"
                                value="00g21ziy2qFutQGH25d7" //glute recruit ID
                            />{" "}
                            Glute Recruits
                            </label>
                            <label>
                            <Field
                                name="courses"
                                component="input"
                                type="checkbox"
                                value="00g21znld7kraJGgK5d7" // driven men ID
                            />{" "}
                            Driven Men
                            </label>
                        </div>
                        </div>

                        <div className='button'>
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={()=> form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                        </div>

                    </form>
                    )}
                />
            </div> : <div style={{paddingTop:'20vh',paddingBottom:'20vh'}}> {loadingMessage} </div>}
        </React.Fragment>
    )
}

export default AccountCreator