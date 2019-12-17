import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Game';
// import Controls from "./Controls";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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