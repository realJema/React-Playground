import React from 'react';
import Counter from './counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// you first start by defining a state, an initial one 
const initialState = {
  count: 0
};


// defining the reducers which are like functions to control the state 
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default function WriterApp() {
    return (

        <Provider store={store}>
          <Counter/>
        </Provider>
        )
};
