import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Card from './card';

//shallow - shallow render (wont render nested components as well)
//mount - full DOM render (will render nested components as well)

//render - rendered to a static HTML (in between shallow and mount)

it('expect to render card component',() => {
    expect(shallow(<Card/>)).toMatchSnapshot();
})