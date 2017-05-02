import React from 'react';
import {shallow, mount} from 'enzyme';

import GameBody from './game-body';

describe('<GameBody />', ()=> {
  it('Should shallow render', () => {
    shallow(<GameBody />);
  });

  it('Should render the form, input, button and p', () => {
    const wrapper = shallow(<GameBody />);
    expect(wrapper.hasClass('game-body')).toBe(true);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('Should render props when set', () => {
    const guessCount = 5;
    const wrapper = shallow(<GameBody guessCount={guessCount}/>);
    expect(wrapper.find('p').contains(
      <span className="guess-count">
        {guessCount}
      </span>
    )).toEqual(true);
  });

  it('Should update input value on user input', () => {
    const simEvent = {
      target: {
        value: '50'
      }
    };
    const wrapper = shallow(<GameBody />);
    const instance = wrapper.instance();
    instance.handleChange(simEvent);
    expect(wrapper.state('input')).toEqual('50');
  });

  it('Should call callback function passed as prop', () => {
    const callback = jest.fn();
    //full DOM rendering is required to test submit and callback
    const wrapper = mount(<GameBody onGuess={callback}/>);
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
