import React from 'react'

interface ProfileProps {
//name: string,
//photo: string,
//message: string

}



export const Profile: React.FC<ProfileProps> = ({}) => {
        return (
            <div>
                <h1>name</h1>
                <h1> img src here </h1>
                <h1>return messages this user has sent.</h1>
            </div>
        );
}