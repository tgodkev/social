import React from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged,} from 'firebase/auth';
import { auth } from '../firebase-config';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {

        
        const provider = new GoogleAuthProvider();

        const login = () => {
            signInWithPopup(auth, provider)
        }
        const name = auth.currentUser?.displayName;
         const pic = auth.currentUser?.photoURL!;
            //console.log(auth)

        return (
            <div>
               <div>
                   Chat.
                   <h3>{name}</h3>
                   <img src={pic} alt="" />
               </div>

                <div>
                <button onClick={login}>sign in </button>
                </div>
            </div>
        );
}