import React from 'react';

function ToDoList() {
    // Static list of tasks
    const tasks = ['Learn React', 'Build a project', 'Read documentation'];

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}

export default ToDoList;