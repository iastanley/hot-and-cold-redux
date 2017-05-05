import {createStore} from 'redux';

import {hotAndColdReducer} from './reducers';

export default createStore(hotAndColdReducer);
