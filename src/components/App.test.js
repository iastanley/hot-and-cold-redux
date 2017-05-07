import React from 'react';
import {shallow, mount} from 'enzyme';

//you want to test the unconnected (non-default) version of the component
import {App} from './App';
import {toggleInstructions, setGuess, resetGame} from '../actions';

describe('<App />', () => {

  //test if app component crashes on render
  it('It should shallow render', ()=>{
    const dispatch = jest.fn();
    shallow(<App showInstructions={false} guessList={[]} feedback={''}
    dispatch={dispatch}/>);
  });

  //test that all child components are rendered
  it('Should render child components', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<App showInstructions={false} guessList={[]} feedback={''} dispatch={dispatch}/>);
    expect(wrapper.find('GameLink')).toHaveLength(2);
    expect(wrapper.find('GameHeader')).toHaveLength(1);
    expect(wrapper.find('GameBody')).toHaveLength(1);
    expect(wrapper.find('GameFooter')).toHaveLength(1);
  });

  it('Should dispatch toggleInstructions from toggleInstructions', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<App showInstructions={false} guessList={[]} feedback={''} dispatch={dispatch}/>);
    wrapper.instance().toggleInstructions();
    expect(dispatch).toHaveBeenCalledWith(toggleInstructions());
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('Should dispatch setGame from setGame', () => {
    const dispatch = jest.fn();
    const guess = '10';
    const wrapper = shallow(<App showInstructions={false} guessList={[]} feedback={''} dispatch={dispatch}/>);
    wrapper.instance().setGuess(guess);
    expect(dispatch).toHaveBeenCalledWith(setGuess(guess));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('Should dispatch resetGame from setGame when feedback is Correct!', () => {
    const guess = '10';
    const correctFeedback = 'Correct!';
    const dispatch = jest.fn();
    const wrapper = shallow(<App showInstructions={false} guessList={[]} feedback={correctFeedback} dispatch={dispatch}/>);
    wrapper.instance().setGuess(guess);
    expect(dispatch).toHaveBeenCalledWith(resetGame());
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('Should dispatch resetGame from resetGame', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<App showInstructions={false} guessList={[]} feedback={''} dispatch={dispatch}/>);
    wrapper.instance().resetGame();
    expect(dispatch).toHaveBeenCalledWith(resetGame());
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  //COME BACK TO THESE - ALL FAILING
  //NOT SURE IT IS POSSIBLE OR GOOD TO TEST THESE WHEN USING REDUX?
  
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
});
