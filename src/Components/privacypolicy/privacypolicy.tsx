import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const PrivacyPolicy = (): JSX.Element => {
    const [privacyMD, setContent] = useState('temp');

    useEffect( ()=> {
        
        fetch('/privacypolicy.md').then(res => res.text()).then(text => setContent(text))
    }, [privacyMD] );

    return (
        <React.Fragment>
            <div style={{textAlign:'left'}}>
                <ReactMarkdown source={privacyMD}  />
            </div>
        </React.Fragment>

    )
}

export default PrivacyPolicy