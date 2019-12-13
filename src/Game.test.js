import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Controls from "./Controls";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('Controls render without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Controls/>, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });