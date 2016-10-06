import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

import { init, pop, push } from './lib/navigation';

const initialState = {
  currentPage: 'one',
  values: {
    one: 'page one',
    two: 'page two',
    three: 'page three'
  },
  routes: {
    one: {
      forward: 'two',
      back: null
    },
    two: {
      forward: 'three',
      back: 'one'
    },
    three: {
      forward: null,
      back: 'two'
    }
  }
};

const navigate = (updateState, state) => page => {
  push(page);
  updateState({
    ...state,
    currentPage: page
  });
};

const updateState = newState => {
  pop(e => updateState({ ...newState, currentPage: e.state}));

  console.log('update state', newState);

  render(
    <App navigate={navigate(updateState, newState)} state={newState} update={updateState}/>,
    document.getElementById('root')
  );
};

init(initialState.currentPage);

updateState(initialState);
