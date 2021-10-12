import React from "react"
import { Button } from 'react-bootstrap'

const LogOut = (): JSX.Element => {
    return(
        <React.Fragment>
            <div style={{marginTop:'25vh'}}> You have successfully logged out. Click below to go back to the home page</div>
            <Button href="/home">Home</Button>
        </React.Fragment>
    )
}
export default LogOut