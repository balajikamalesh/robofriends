import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Cardlist from './cardlist';

it('expect to render card component',() => {
    const mockRobots = [
        {
            id: 1,
            name: 'balaji',
            email: 'balaji@gmail.com'
        },
        {
            id: 2,
            name: 'kamalesh',
            email: 'kamalesh@gmail.com'
        }
    ]
    expect(shallow(<Cardlist robots={mockRobots}/>)).toMatchSnapshot();
})