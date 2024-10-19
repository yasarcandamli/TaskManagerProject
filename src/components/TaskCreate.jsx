import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
    const [title, setTitle] = useState(task ? task.title : "");
    const [taskDescription, setTaskDescription] = useState(task ? task.taskDescription : "");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTaskChange = (event) => {
        setTaskDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDescription)
        } else {
            onCreate(title, taskDescription);
        }
        setTitle("");
        setTaskDescription("");
    };

    return (
        <>
            {taskFormUpdate ?
                <div className="task-update">
                    <h3 className="task-update-title">Update Task</h3>
                    <form className="task-form">
                        <label className="task-label">Task Name</label>
                        <input className="task-input" value={title} onChange={handleTitleChange} />
                        <label className="task-label">Task Description</label>
                        <textarea className="task-input" rows={5} value={taskDescription} onChange={handleTaskChange} />
                        <button className="task-button update-btn" onClick={handleSubmit}>Update</button>
                    </form>
                </div>
                :
                <div className="task-create">
                    <h3 className="task-create-title">Create Task</h3>
                    <form className="task-form">
                        <label className="task-label">Task Name</label>
                        <input className="task-input" value={title} onChange={handleTitleChange} />
                        <label className="task-label">Task Description</label>
                        <textarea className="task-input" rows={5} value={taskDescription} onChange={handleTaskChange} />
                        <button className="task-button" onClick={handleSubmit}>Create</button>
                    </form>
                </div>
            }
        </>
    );
}

export default TaskCreate;