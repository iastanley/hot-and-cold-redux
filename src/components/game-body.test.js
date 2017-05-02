import React from 'react';
import {shallow, mount} from 'enzyme';

import GameBody from './game-body';

describe('<GameBody />', ()=> {
  it('Should shallow render', () => {
    shallow(<GameBody />);
  });
});
