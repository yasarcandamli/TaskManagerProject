import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDescription) => {
    const response = await axios.post('http://localhost:3000/tasks', {
      title,
      taskDescription,
    });

    console.log(response);

    const createdTasks = [
      ...tasks,
      response.data
    ];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeleteTasks);
  };

  const updateTaskById = async (id, updatedTitle, updatedTaskDescription) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, { title: updatedTitle, taskDescription: updatedTaskDescription });
    const afterUpdateTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          taskDescription: updatedTaskDescription
        }
      }
      return task;
    });

    setTasks(afterUpdateTasks);
  };

  return (
    <>
      <div className="App">
        <nav className='nav'>
          <h1 className='app-title'>TASK MANAGER</h1>
        </nav>
        <TaskCreate onCreate={createTask} />
        <h2>Görevler</h2>
        <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={updateTaskById} />
      </div>
    </>
  )
}

export default App
