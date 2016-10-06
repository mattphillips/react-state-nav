import React from 'react';
import './App.css';
import Page from '../Page';

const click = (update, newPage, state) => (e) => {
  window.history.pushState(newPage, null, newPage);
  update({
    ...state,
    currentPage: newPage
  });
};

const change = (update, state) => (e) => {
  const value = e.target.value;
  update({
    ...state,
    values: {
      ...state.values,
      [state.currentPage]: value
    }
  });
};

export default function App ({ state, update }) {
  const page = state.currentPage;
  const { routes, values } = state;
  return (
    <div className="App">
      <Page>
        <input onChange={change(update, state)} type="text" value={values[page]} />
        {
          page !== 'one' &&
          <button type="button" onClick={click(update, routes[page].back, state)}>Back</button>
        }
        {
          page !== 'three' &&
          <button type="button" onClick={click(update, routes[page].forward, state)}>Forward</button>
        }
      </Page>
    </div>
  );
}
