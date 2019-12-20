import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//For checking after a refactor
it("should render <App />", () => {
  const componentTree = renderer.create(<App />).toJSON();
  expect(componentTree).toMatchSnapshot();
});