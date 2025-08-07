import "./Task-list.css";
function TaskList({ tasks, onDelete }) {
  return (
    <section className="task-list-section">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-details">
              <h3 className="task-text">{task.text}</h3>
              {task.day && <p className="task-date">{task.day}</p>}
            </div>
            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)}
              title="Delete task"
            >
              ❌
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default TaskList;
