import React from 'react';
import {shallow, mount} from 'enzyme';

import GameLink from './game-link';

describe('<GameLink />', () => {
  it('Should shallow render', () => {
    shallow(<GameLink />);
  });
});
