import React from 'react';

import Card from './card';

const CardList = ({robots}) => {
    // return new Error('NOOOOOOO')
    return (
        <div>
            {robots.map(robot => {
                return <Card key={robot.id}
                            id={robot.id}  //given to prevent DOM re-renders
                            name={robot.name} 
                            email={robot.name} />
        })}
        </div>
    )
}

export default CardList;