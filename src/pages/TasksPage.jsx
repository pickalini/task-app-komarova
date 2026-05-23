import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function TasksPage() {
  return (
    <main className="page">
      <h2>Список задач</h2>

      <p>
        Здесь можно просматривать задачи, загруженные с сервера, а также
        добавлять и удалять свои задачи.
      </p>

      <div className="page-actions">
        <Link className="secondary-button" to="/about">
          Подробнее о приложении
        </Link>
      </div>

      <TaskList />
    </main>
  );
}

export default TasksPage;
