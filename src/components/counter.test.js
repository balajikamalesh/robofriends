import {shallow, render, mount} from 'enzyme';
import React from 'react';
import Counter from './counter';

it('Counter Button test',() => {
    const wrapper = shallow(<Counter/>);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');

    //simulate method runs only on single node, thats why we need id
    expect(wrapper.state()).toEqual({count: 2});

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 3});
})