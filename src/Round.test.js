import React from 'react';
import ReactDOM from 'react-dom';
import { Round } from './Round';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Round />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it("receives a number", () => {
    const props = {
        round: 5
    },
        RoundComponent = mount(<Round {...props} />).find(Round);

    expect(typeof RoundComponent.props().round).toBe('number');

});