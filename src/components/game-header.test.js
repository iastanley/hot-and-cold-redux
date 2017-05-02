import React from 'react';
import {shallow, mount} from 'enzyme';

import GameHeader from './game-header';

describe('<GameHeader />', () => {
  it('Should shallow render', () => {
    shallow(<GameHeader />);
  });
});
