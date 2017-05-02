import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';

describe('<App />', () => {
  let guessList = [];
  beforeAll(()=> {
    for(let i = 1; i < 4; i++) {
      guessList.push(i);
    }
  });

  it('It should shallow render', ()=>{
    shallow(<App />);
  });

  it('Should render game footer', () => {
    const element = shallow(<App/>);
    // let setCallback = (guess) => element.instance().setGuess(guess);
    let setCallback = element.instance().setGuess;
    guessList.forEach(setCallback);
    expect(element.find('GameFooter').prop('guesses').length).toEqual(3);
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

  it('Should show instructions', () => {
    const element = mount(<App />);
    console.log(element.find('.left a'));
    element.find('.left a').simulate('click');
    expect(element.find('Instructions').length).toEqual(1);
  });

  //check children render

  //check props of children

  //
});
