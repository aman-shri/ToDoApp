import React from "react";
import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Read SpringBoot", "Complete Assignments", "Prepare Breakfast", "Sleep for 2 hours", "Take a shower"]);

    const handleEmptyClick = () => {
        setTasks([]);
    };

    if (tasks.length === 0) {
        return (
          <div>
            <p style={{ fontStyle: 'italic' }}>Nothing to do buddy. Sleep!</p>
            <button onClick={handleEmptyClick}>Empty</button>
          </div>
        );
      } else {
        return (
          <div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            <button onClick={handleEmptyClick}>Empty</button>
          </div>
        );
      }
}