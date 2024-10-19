import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
    const [showUpdate, setShowUpdate] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id)
    };

    const handleUpdateClick = () => {
        setShowUpdate(!showUpdate);
    };

    const handleSubmit = (id, updatedTitle, updatedTaskDescription) => {
        setShowUpdate(false);
        onUpdate(id, updatedTitle, updatedTaskDescription);
    };

    return (
        <>
            <div className="task-show">
                {showUpdate ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} /> :
                    <div>
                        <h3 className="task-show-title">Task</h3>
                        <p>{task.title}</p>
                        <h3 className="task-show-title">Task Description</h3>
                        <p>{task.taskDescription}</p>
                        <div className="task-show-btns">
                            <button className="task-show-btn task-delete-btn" onClick={handleDeleteClick}>Delete</button>
                            <button className="task-show-btn task-update-btn" onClick={handleUpdateClick}>Update</button>
                        </div>
                    </div>}

            </div>
        </>
    );
}

export default TaskShow;