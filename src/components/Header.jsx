import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Список задач</h1>

      <nav className="navigation">
        <Link to="/">Задачи</Link>
        <Link to="/about">О приложении</Link>
        <Link to="/profile">Обо мне</Link>
      </nav>
    </header>
  );
}

export default Header;
