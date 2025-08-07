import React, { useState } from 'react';
import './Task-add.css';

export default function TaskAdd({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please enter a task description.');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text.trim(),
      day: day || null,
      done: false,
      createdAt: new Date().toISOString(),
    };

    onAdd?.(newTask);
    setText('');
    setDay('');

    const handleAdd = () => {
  if (taskText && taskDate) {
    onAddTask({ text: taskText, date: taskDate });
    setTaskText("");
    setTaskDate("");
  }
};
  };

return (
  <section className="task-add-section" style={{ marginTop: '0' }}>

    <form className="task-add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add your To-Dos?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="date"
        className="input-date"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  </section>
);

}
