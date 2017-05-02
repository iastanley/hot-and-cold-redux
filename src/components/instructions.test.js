import React from 'react';
import {shallow, mount} from 'enzyme';

import Instructions from './instructions';

describe('<Instructions />', () => {
  it('Should shallow render', () => {
    shallow(<Instructions />);
  });
});
