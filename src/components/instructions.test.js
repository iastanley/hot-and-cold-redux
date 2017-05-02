import React from 'react';
import {shallow, mount} from 'enzyme';

import Instructions from './instructions';

describe('<Instructions />', () => {
  it('Should shallow render', () => {
    shallow(<Instructions />);
  });

  //test that Instructions renders a h1, p and button
  it('Should contain a class, h1, p, and button', () => {
    const wrapper = shallow(<Instructions/>);
    expect(wrapper.find('.instructions')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  //test that Instructions runs callback on button click
  it('Should run callback on button click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Instructions onClick={callback}/>);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

});
