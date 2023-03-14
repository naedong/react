import React, { useEffect } from "react";
import Config, { auth } from './config';
import * as firebaseui from "firebaseui";
import firebase from 'firebase/compat/app';
import { Button } from "react-bootstrap";


function Check() {
    const provider = new firebase.auth.GoogleAuthProvider();
           provider.setCustomParameters({ prompt: 'select_account' });
    useEffect(() => {
        const fbase = Config;
        const uiConfig = {
            signInSuccessUrl: "https://localhost:3000/main",
            signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
            tosUrl: "https://localhost:3000/main"
        };
        
 
    
        
        // let ui = new firebaseui.auth.AuthUI(firebase.auth());
    //     ui.start("#firebaseui-auth-container", uiConfig);

    }, []);
         const signInWithGoogle = () => auth.signInWithGoogle(provider);
    return (
        <div>
            <div id="firebaseui-auth-container">
                <button onClick={signInWithGoogle}>isGoogleSignIn</button>
            </div>
        </div>
	    );
    }
export default Check;

