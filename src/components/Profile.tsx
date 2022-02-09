import React from 'react'
import { auth } from '../firebase-config';

interface ProfileProps {
//name: string,
//photo: string,
//message: string

}


const pic = auth.currentUser?.photoURL!;
const name = auth.currentUser?.displayName


export const Profile: React.FC<ProfileProps> = (props) => {
        return (
            <div>
                <h1>{name}</h1>
                <img src={pic} alt="" />
                <h1>return messages this user has sent.</h1>
            </div>
        );
}