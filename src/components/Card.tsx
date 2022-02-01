import React from 'react'

interface CardProps {
message:string,
name:string
}

export const Card: React.FC<CardProps> = (props) => {
        return (
            <div>
                <h1>{props.message}</h1>
                <h1>{props.name}</h1>
                <h1></h1>
            </div>
        );
}