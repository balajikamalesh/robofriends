import {shallow, render, mount} from 'enzyme';
import React from 'react';
import App from './App';

//shallow - shallow render (wont render nested components as well)
//mount - full DOM render (will render nested components as well)

//render - rendered to a static HTML (in between shallow and mount)

// it('expect to render card component',() => {
//     const mockStore = {
//         robots: [],
//         searchField: ''
//     }
//     expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
// })