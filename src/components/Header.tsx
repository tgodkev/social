import React, {useState} from 'react'
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../firebase-config';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {

        const [SignedIn, setSignedIn] = useState(false);
        const provider = new GoogleAuthProvider();
        console.log(SignedIn);
        

        async function login() {
            await signInWithPopup(auth, provider);
            setSignedIn(true);

        }

        

        const logout = () => {
            auth.signOut();
            console.log("logout");
            setSignedIn(false)
            
        };
        
        
        const name = auth.currentUser?.displayName;
         const pic = auth.currentUser?.photoURL!;
            //console.log(auth)

        return (
            <div>
               <div className='username'>
                   {SignedIn && <h1>{name}</h1>}
                   {SignedIn && <img src={pic} alt="" />}

               </div>

                <div className='userlogin'>
                <button onClick={login}>sign in </button>
                {SignedIn && <button onClick={logout}>Sign Out.</button> }
                </div>
            </div>
        );
}