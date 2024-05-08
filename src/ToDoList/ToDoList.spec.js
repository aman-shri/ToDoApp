import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
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

describe('Testing functionality', () => {

    it('should mark tasks as completed when clicked', () => {
        const { getByText } = render(<ToDoList />);
        const taskElement = getByText('Read SpringBoot');
        fireEvent.click(taskElement);
        expect(taskElement).toHaveStyle('text-decoration: line-through');
    });


    it('removes completed tasks when "Remove Completed" button is clicked', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        wrapper.find('li').first().simulate('click');
        removeCompletedButton.simulate('click');
        expect(wrapper.find('li')).toHaveLength(4);
    });


    it('renders the "Nothing to do buddy. Sleep!" message when all tasks are completed', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        wrapper.find('li').forEach(task => {
            task.simulate('click');
        });
        removeCompletedButton.simulate('click');
        const messageElement = wrapper.find('#no-task-message');
        expect(messageElement.text()).toBe('Nothing to do buddy. Sleep!');
    });

});