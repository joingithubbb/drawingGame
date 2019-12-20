import React from 'react';
import ReactDOM from 'react-dom';
import { GameEngine } from './GameEngine';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

// REQUIREMENT: Test suite that test the features of your UI

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameEngine />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//For checking after a refactor
it("should render <App />", () => {
    const componentTree = renderer.create(<GameEngine />).toJSON();
    expect(componentTree).toMatchSnapshot();
  });