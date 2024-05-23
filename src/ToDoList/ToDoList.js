import React from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import "./ToDoList.css"

export default function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Read SpringBoot", completed: false},
        { text: "Complete Assignments", completed: false},
        { text: "Prepare Breakfast", completed: false},
        { text: "Sleep for 2 hours", completed: false},
        { text: "Take a shower", completed: false}]);

    const markTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const handleRemoveCompletedClick = () => {
        const newTasks = tasks.filter(task => !task.completed);
        setTasks(newTasks);
    };
//convert the task to component
    return (
        <div className="container">
          {tasks.length === 0 ? (
            <p id="no-task-message" className="italic">Nothing to do buddy. Sleep!</p>
          ) : (
            <ul>
            {tasks.map((task, index) => (
                <TaskItem 
                  key={index}
                  text={task.text}
                  completed={task.completed}
                  onClick={() => markTaskCompletion(index)}
                />
            ))}
        </ul>
          )}
          {tasks.length > 0 && (
            <button id="remove-completed" onClick={handleRemoveCompletedClick}>Remove Completed</button>
          )}
        </div>
      );
}