import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить задачи");
        }

        return response.json();
      })
      .then((data) => {
        const preparedTasks = data.map((task) => ({
          id: task.id,
          text: task.title,
          completed: task.completed,
        }));

        setTasks(preparedTasks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  if (loading) {
    return <p className="status-message">Загрузка задач...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p className="status-message">Задач пока нет</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.text} {task.completed ? "✔" : "❌"}
              </span>

              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
