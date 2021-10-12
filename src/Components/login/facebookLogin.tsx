import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';


const FacebookLogin = (): JSX.Element | null => {
    const { oktaAuth } = useOktaAuth();

    useEffect(() => {
        oktaAuth.signInWithRedirect( { idp:'0oa12b55iwkouIyed5d7'} )
      });

    return(
        <React.Fragment/>
    )

}

export default FacebookLogin