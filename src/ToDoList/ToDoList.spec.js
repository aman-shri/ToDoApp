import React from "react";
import { shallow } from "enzyme";
import ToDoList from "./ToDoList";

describe('Basic rendering of ToDoList Components', () => {

    it('renders all the tasks', () => {
        const wrapper = shallow(<ToDoList />);
        expect(wrapper.find('li')).toHaveLength(5);
    });

    it('renders the remove completed button', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        expect(removeCompletedButton.exists()).toBe(true);
    });


});