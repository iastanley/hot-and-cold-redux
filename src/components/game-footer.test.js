import React from 'react';
import {shallow, mount} from 'enzyme';

import GameFooter from './game-footer';

describe('<GameFooter />', () => {
  it('Should shallow render', () => {
    shallow(<GameFooter />);
  });
});
