import './Header.css';

export default function Header({ title = 'My To Do App', count = 0 }) {
  return (
    <nav className="navbar">
      <span className="navbar-title">{title}</span>
      <span className="task-count">
        {count} {count === 1 ? 'task' : 'tasks'}
      </span>
    </nav>
  );
}
