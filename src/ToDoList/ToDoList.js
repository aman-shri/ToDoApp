
export default function ToDoList() {
    const tasks = ["Read SpringBoot", "Complete Assignments", "Prepare Breakfast", "Sleep for 2 hours", "Take a shower"];

    return(
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}