import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Game';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks if the Button is there', () => {
      const wrapper = shallow(<Game />)
      let Button = wrapper.find('#startGameButton');
      expect(Button).toHaveLength(1);
});

it('checks if the button disappears after onClick', () => {
  const wrapper = shallow(<Game />)
  let Button = wrapper.find('#startGameButton');
  Button.simulate('click');
  Button = wrapper.find('#startGameButton');
  expect(Button).toHaveLength(0);
});

