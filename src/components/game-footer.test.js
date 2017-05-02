import React from 'react';
import {shallow, mount} from 'enzyme';

import GameFooter from './game-footer';

describe('<GameFooter />', () => {
  it('Should shallow render', () => {
    shallow(<GameFooter />);
  });

  it('Should render div with class and guesses', () => {
    const guesses = [25, 50, 75];
    const wrapper = shallow(<GameFooter guesses={guesses}/>);
    expect(wrapper.hasClass('game-footer')).toBe(true);
    expect(wrapper.find('.guess')).toHaveLength(guesses.length);
  });
});
