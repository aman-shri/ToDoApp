import React from "react";

const TaskItem = ({ text, completed, onClick }) => (
    <li>
        <label>
            <input
                type= "checkbox"
                checked = {completed}
                onChange = {onClick}
            />
            <span style={{ marginLeft: "5px" }}>{text}</span>
        </label>
    </li>
);

export default TaskItem;