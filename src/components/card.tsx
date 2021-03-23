import React from 'react';
import { robot } from '../App';

const Card: React.FC<robot> = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            <img alt="robots" src={`https://robohash.org/${name}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;