import React from 'react';
import Card from './card';

import { robot } from '../App';

const CardList: React.FC<any> = ({robots}: {robots: Array<robot>}) => {
    // return new Error('NOOOOOOO')
    return (
        <div>
            {robots.map(robot => {
                return <Card key={robot.id}
                            id={robot.id}  //given to prevent DOM re-renders
                            name={robot.name} 
                            email={robot.email} />
        })}
        </div>
    )
}

export default CardList;