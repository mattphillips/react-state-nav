import React from 'react';
import './App.css';
import Page from '../Page';

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

export default function App ({ navigate, state, update }) {
  const page = state.currentPage;
  const { routes, values } = state;
  return (
    <div className="App">
      <Page>
        <input onChange={change(update, state)} type="text" value={values[page]} />
        {
          page !== 'one' &&
          <button type="button" onClick={() => navigate(routes[page].back)}>Back</button>
        }
        {
          page !== 'three' &&
          <button type="button" onClick={() => navigate(routes[page].forward)}>Forward</button>
        }
      </Page>
    </div>
  );
}
