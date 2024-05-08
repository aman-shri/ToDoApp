import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe('Rendering of header', () => {

    it('renders header', () => {

        const wrapper = shallow(<Header />);
        const headerText = wrapper.find('#header-text');
        expect(headerText.text()).toBe('ToDo List');

    });

});