import React, { useState } from 'react';
import Header from './components/Header';
import TaskAdd from './components/Task-add';
import TaskList from './components/Task-list';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (taskObj) => {
    setTasks(prev => [taskObj, ...prev]);
  };

  const handleDelete = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <>
      <Header title="My To Do App" count={tasks.length} />
      <main className="main-content">
        <TaskAdd onAdd={handleAdd} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDelete={handleDelete} />
        ) : (
          <p className="no-tasks-message">No tasks yet. Add one above.</p>
        )}
      </main>
    </>
  );
}
