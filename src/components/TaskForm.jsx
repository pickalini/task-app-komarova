import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    addTask(trimmedText);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TaskForm;
