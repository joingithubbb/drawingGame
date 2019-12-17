import React from 'react';
import ReactDOM from 'react-dom';
import { Round } from './Round';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Round />, div);
    ReactDOM.unmountComponentAtNode(div);
});