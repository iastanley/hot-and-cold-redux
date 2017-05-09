import React from 'react';
import {shallow, mount} from 'enzyme';

//you want to test the unconnected (non-default) version of the component
import {App} from './App';
import {toggleInstructions, setGuess, resetGame} from '../actions';

describe('<App />', () => {

  //test if app component crashes on render
  it('It should shallow render', ()=>{
    const dispatch = jest.fn();
    shallow(<App
    dispatch={dispatch}/>);
  });

  //test that all child components are rendered
  it('Should render child components', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<App dispatch={dispatch}/>);
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
});
