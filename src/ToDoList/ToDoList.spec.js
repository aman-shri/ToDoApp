import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ToDoList from "./ToDoList";

//add checkboxes instead of strike through

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
        const checkbox = taskElement.querySelector('input[type="checkbox"]');
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
    }); 


    it('removes completed tasks when "Remove Completed" button is clicked', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        wrapper.find('input[type="checkbox"]').first().simulate('change', { target: { checked: true } });
        removeCompletedButton.simulate('click');
        expect(wrapper.find('li')).toHaveLength(4);
    });

    //add a test to remove 'Remove Completed' button when no task is there
    it('removes the "Remove Completed" button when there are no tasks', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');

        wrapper.find('input[type="checkbox"]').forEach(checkbox => {
            checkbox.simulate('change', { target: { checked: true } });
        });

        removeCompletedButton.simulate('click');

        const updatedRemoveCompletedButton = wrapper.find('#remove-completed');
        expect(updatedRemoveCompletedButton.exists()).toBe(false);
    });


    it('renders the "Nothing to do buddy. Sleep!" message when all tasks are completed', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        wrapper.find('input[type="checkbox"]').forEach(checkbox => {
            checkbox.simulate('change', { target: { checked: true } });
        });
        removeCompletedButton.simulate('click');
        const messageElement = wrapper.find('#no-task-message');
        expect(messageElement.text()).toBe('Nothing to do buddy. Sleep!');
    });

});