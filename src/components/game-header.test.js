import React from 'react';
import {shallow, mount} from 'enzyme';

import GameHeader from './game-header';

describe('<GameHeader />', () => {
  it('Should shallow render', () => {
    shallow(<GameHeader />);
  });

  //test that game header renders with correct class, and feedback
  it('Should have class game-header', () => {
    const wrapper = shallow(<GameHeader />);
    expect(wrapper.hasClass('game-header')).toBe(true);
  });

  it('Should render feedback text', () => {
    const feedback = 'foo';
    const wrapper = shallow(<GameHeader feedback={feedback}/>);
    expect(wrapper.find('.game-header').contains(
      <p>{feedback}</p>
    )).toBe(true);
  });
});
