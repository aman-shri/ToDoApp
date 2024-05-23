import React from "react";
import { mount, shallow } from "enzyme";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ToDoList from "./ToDoList";

//add checkboxes instead of strike through

describe('Basic rendering of ToDoList Components', () => {
    
    it('renders all the tasks', () => {
        const wrapper = shallow(<ToDoList />);
        expect(wrapper.find('TaskItem')).toHaveLength(5);
    });
    
    
    it('renders the remove completed button', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        expect(removeCompletedButton.exists()).toBe(true);
    });
    

});

describe('Testing functionality', () => {

    it('should mark tasks as completed when clicked', () => {
        const wrapper = shallow(<ToDoList />);
        const taskItems = wrapper.find('TaskItem');
        const firstTaskItem = taskItems.first();
        firstTaskItem.props().onClick();
        expect(wrapper.find('TaskItem').first().props().completed).toBe(true);
    }); 


    it('removes completed tasks when "Remove Completed" button is clicked', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        const taskItems = wrapper.find('TaskItem');
        const firstTaskItem = taskItems.first();
        firstTaskItem.props().onClick();
        removeCompletedButton.simulate('click');
        expect(wrapper.find('TaskItem')).toHaveLength(4);
    });

    //add a test to remove 'Remove Completed' button when no task is there
    it('removes the "Remove Completed" button when there are no tasks', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        const taskItems = wrapper.find('TaskItem');
        taskItems.forEach(taskItem => taskItem.props().onClick());
        removeCompletedButton.simulate('click');
        expect(wrapper.find('#remove-completed').exists()).toBe(false);
    });


    it('renders the "Nothing to do buddy. Sleep!" message when all tasks are completed', () => {
        const wrapper = shallow(<ToDoList />);
        const removeCompletedButton = wrapper.find('#remove-completed');
        const taskItems = wrapper.find('TaskItem');
        taskItems.forEach(taskItem => taskItem.props().onClick());
        removeCompletedButton.simulate('click');
        const messageElement = wrapper.find('#no-task-message');
        expect(messageElement.text()).toBe('Nothing to do buddy. Sleep!')
    });

});