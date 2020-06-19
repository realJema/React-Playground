import React from 'react';
import { Provider } from 'react-redux';
import Counter1 from './counter';
import store from "./Components/store";

class Counter extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <Counter1 />  
      </Provider>
    );
  }
}

export default Counter;
