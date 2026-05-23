function TaskItem({ task, deleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
}

export default TaskItem;
