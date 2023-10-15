export default function Task(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleCompleted(task);
  }

  return (
    <li className="list">
      <div className="task-list">
        <div className="task-left">
          <input
            type="checkbox"
            onChange={handleStatusChange}
            checked={task.completed}
          />
          <span>
            {task.completed === true ? <del>{task.title}</del> : task.title}
          </span>
        </div>
        <div className="task-right">
          <button className="edit-button">Edit</button>
          <button onClick={handleDelete} className="remove-button">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
