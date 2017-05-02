import React from 'react';
import {shallow, mount} from 'enzyme';

import GameLink from './game-link';

describe('<GameLink />', () => {
  it('Should shallow render', () => {
    shallow(<GameLink />);
  });

  //test that an anchor tag is rendered
  it('Should render an anchor tag', () => {
    const text = 'some text';
    const classes = 'class1 class2';
    const wrapper = shallow(<GameLink classes={classes} text={text} onClick="test"/>);
    expect(wrapper.hasClass('class1')).toBe(true);
    expect(wrapper.hasClass('class2')).toBe(true);
    expect(wrapper.contains(
      <a href="#" className={classes} onClick="test">{text}</a>
    )).toBe(true);
  });

  it('Should run callback when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<GameLink onClick={callback}/>);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });

});
