import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

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

const navigate = (update, state) => page => {
  window.history.pushState(page, null, page);
  update({
    ...state,
    currentPage: page
  });
};

const updateState = newState => {
  window.onpopstate = e => {
    updateState({
      ...newState,
      currentPage: e.state
    });
  };

  console.log('update state', newState);

  render(
    <App navigate={navigate(updateState, newState)} state={newState} update={updateState}/>,
    document.getElementById('root')
  );
};

window.onload = () => {
  if (history.state === null) {
    window.history.replaceState(initialState.currentPage, null, null);
  }
};

updateState(initialState);
