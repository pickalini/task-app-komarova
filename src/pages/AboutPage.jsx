import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <main>
      <section className="page-header">
        <h2>О приложении</h2>

        <p>Это учебное React-приложение для работы со списком задач.</p>

        <p>
          В приложении задачи загружаются с открытого API JSONPlaceholder. После
          загрузки пользователь может добавить новую задачу или удалить
          существующую.
        </p>

        <p>
          Также в проекте используется React Router, поэтому переход между
          страницами происходит без полной перезагрузки сайта.
        </p>

        <Link className="about-button" to="/">
          Вернуться к списку задач
        </Link>
      </section>
    </main>
  );
}

export default AboutPage;
