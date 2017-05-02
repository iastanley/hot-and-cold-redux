import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';

describe('<App />', () => {

  //test if app component crashes on render
  it('It should shallow render', ()=>{
    shallow(<App />);
  });

  //test that all child components are rendered
  it('Should render child components', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('GameLink')).toHaveLength(2);
    expect(wrapper.find('GameHeader')).toHaveLength(1);
    expect(wrapper.find('GameBody')).toHaveLength(1);
    expect(wrapper.find('GameFooter')).toHaveLength(1);
  });

  //test toggleInstructions
  it('Should show instructions on link click', () => {
    const wrapper = mount(<App/>);
    wrapper.find('a .left').simulate('click');
    expect(wrapper.find('Instructions')).toHaveLength(1);
  });

  //test resetGame on click
  it('Should call resetGame when New Game link clicked', () => {
    const wrapper = mount(<App/>);
    const instance = wrapper.instance();
    wrapper.find('a .right').simulate('click');
    //testing that state object has been reset
    expect(wrapper.state('prevGuesses')).toHaveLength(0);
  });

  //should render footer with correct props from state object
  it('Should render GameFooter & GameBody with correct props', () => {
    let guessList = [25, 50, 75];
    const wrapper = shallow(<App/>);
    guessList.forEach(wrapper.instance().setGuess);
    //both props are based on state.prevGuesses value
    expect(wrapper.find('GameFooter').prop('guesses')).toHaveLength(guessList.length);
    expect(wrapper.find('GameBody').prop('guessCount')).toBe(guessList.length);
  });

  it('Should give error feedback for invalid input', ()=> {
    const errorOutOfRange = 101;
    const errorType = 'this';

    const element = shallow(<App />);
    element.instance().setGuess(errorOutOfRange);
    expect(element.find('GameHeader').prop('feedback')).toEqual('Number not between 1 and 100');
    element.instance().setGuess(errorType);
    expect(element.find('GameHeader').prop('feedback')).toEqual('Not a valid input!');
  });

  it('Should give correct feedback for valid input', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      correctNumber: 1
    });
    wrapper.instance().setGuess(50);
    expect(wrapper.find('GameHeader').prop('feedback')).toBe('cold');
    wrapper.instance().setGuess(8);
    expect(wrapper.find('GameHeader').prop('feedback')).toBe('Warm');
    wrapper.instance().setGuess(2);
    expect(wrapper.find('GameHeader').prop('feedback')).toBe('Hot!');
    //this must go last due to behavior after correct guess
    wrapper.instance().setGuess(1);
    expect(wrapper.find('GameHeader').prop('feedback')).toBe('Correct!');


  });
});
